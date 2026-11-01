
import React, { useState, useEffect, useRef } from "react";

import {
    getForm,
    UrlAsyncFetch,
    FORM_SUBMITTED,
    FORM_RESET
} from "e-ui-react";

import { InfoIcon } from "@LibFormElements/common.js";

import {
    ElementValidation,
    ApiElementValidation,
    createValidationResult,
    resolveOnChangeResult,
    resolveApiValidationResult,
    getApiMessage
} from "./validation.js";


export const TextBox = ({
    id,
    name,
    label,
    width,
    placeholder,
    value,
    validation,
    disabled,

    // Receives the final unified validation result.
    onChange,

    // Optional custom asynchronous validation callback.
    onValidate
}) => {

    // ---------------------------------------
    // Step 1: Form Context
    // ---------------------------------------

    const formContext = getForm();

    const formName = formContext?.name;
    const form = formContext?.form;

    const initialValue = value ?? "";


    // ---------------------------------------
    // Step 2: Component State
    // ---------------------------------------

    const [textBoxValue, setTextBoxValue] = useState(initialValue);

    const [fieldResult, setFieldResult] = useState(
        createValidationResult({
            value: initialValue
        })
    );


    // ---------------------------------------
    // Step 3: Refs
    // ---------------------------------------

    const requestIdRef = useRef(0);

    const cleanupTimeoutRef = useRef(null);

    const onChangeRef = useRef(onChange);

    const onValidateRef = useRef(onValidate);

    const validationRef = useRef(validation);


    // Keep the latest callbacks and validation configuration.
    onChangeRef.current = onChange;

    onValidateRef.current = onValidate;

    validationRef.current = validation;


    // ---------------------------------------
    // Step 4: Form Mode
    // ---------------------------------------

    const formMode = form?.[formName]?.mode;

    const showValidation =
        Boolean(validation && Object.keys(validation).length > 0) &&
        (
            formMode === FORM_SUBMITTED ||
            String(textBoxValue).length > 0
        );


    // ---------------------------------------
    // Step 5: Register Result In Form
    // ---------------------------------------

    const registerToForm = (result) => {

        if (formName !== undefined && name) {

            formContext?.setForm(formName, {
                [name]: result
            });
        }
    };


    // ---------------------------------------
    // Step 6: Validation Configuration Key
    // ---------------------------------------

    const validationKey = JSON.stringify(validation ?? {});


    // ---------------------------------------
    // Step 7: External Value Synchronization
    // ---------------------------------------

    useEffect(() => {

        const nextValue = value ?? "";

        setTextBoxValue(previousValue =>
            previousValue === nextValue
                ? previousValue
                : nextValue
        );

    }, [value]);


    // ---------------------------------------
    // Step 8: Form Reset
    // ---------------------------------------

    useEffect(() => {

        if (formMode !== FORM_RESET) {
            return;
        }

        // Invalidate pending API requests.
        requestIdRef.current++;

        // Cancel pending debounce.
        cleanupTimeoutRef.current?.();

        cleanupTimeoutRef.current = null;

        const resetValue = value ?? "";

        setTextBoxValue(resetValue);

        const resetResult = createValidationResult({
            value: resetValue
        });

        setFieldResult(resetResult);

        registerToForm(resetResult);

    }, [formMode, value]);


    // ---------------------------------------
    // Step 9: Client + Custom + API Validation
    // ---------------------------------------

    useEffect(() => {

        let cancelled = false;

        const currentRequestId = ++requestIdRef.current;

        const isRequestValid = () => {

            return (
                !cancelled &&
                currentRequestId === requestIdRef.current
            );
        };


        const runValidation = async () => {

            const currentValidation =
                validationRef.current ?? {};

            const apiConfig =
                currentValidation.apiValidation ?? {};


            // ---------------------------------------
            // Step 9.1: Client-side Validation
            // ---------------------------------------

            let finalResult = ElementValidation(
                currentValidation,
                textBoxValue
            );

            if (!isRequestValid()) return;

            finalResult = createValidationResult(finalResult);


            // ---------------------------------------
            // Step 9.2: Stop On Client Validation Error
            // ---------------------------------------

            if (finalResult.errorMessage) {

                setFieldResult(finalResult);

                registerToForm(finalResult);

                onChangeRef.current?.(finalResult);

                return;
            }


            // ---------------------------------------
            // Step 9.3: Custom Validation
            // ---------------------------------------

            if (onValidateRef.current) {

                try {

                    const callbackResult =
                        await onValidateRef.current(finalResult);

                    if (!isRequestValid()) return;

                    finalResult = resolveOnChangeResult(
                        callbackResult,
                        finalResult
                    );


                    // Resolve custom response ID
                    // using configured returnMessages.
                    if (
                        finalResult.responseId &&
                        !finalResult.successMessage &&
                        !finalResult.errorMessage
                    ) {

                        const callbackMessage = getApiMessage(
                            finalResult.responseId,
                            apiConfig.returnMessages ?? []
                        );

                        finalResult = resolveApiValidationResult(
                            {
                                responseId: finalResult.responseId,
                                matchedMessage: callbackMessage
                            },
                            finalResult
                        );
                    }


                    // Stop if custom validation fails.
                    if (finalResult.errorMessage) {

                        setFieldResult(finalResult);

                        registerToForm(finalResult);

                        onChangeRef.current?.(finalResult);

                        return;
                    }

                } catch (error) {

                    if (!isRequestValid()) return;

                    console.error(
                        "TextBox custom validation failed:",
                        error
                    );

                    finalResult = createValidationResult({
                        ...finalResult,
                        errorMessage: "Unable to validate at this time.",
                        successMessage: ""
                    });

                    setFieldResult(finalResult);

                    registerToForm(finalResult);

                    onChangeRef.current?.(finalResult);

                    return;
                }
            }


            // ---------------------------------------
            // Step 9.4: API Validation
            // ---------------------------------------

            if (apiConfig?.url && apiConfig?.method) {

                try {

                    // Debounce API request.
                    await new Promise(resolve => {

                        const timeoutId = setTimeout(
                            resolve,
                            400
                        );

                        cleanupTimeoutRef.current = () => {

                            clearTimeout(timeoutId);

                            resolve();
                        };

                    });

                    cleanupTimeoutRef.current = null;

                    if (!isRequestValid()) return;


                    // Execute API validation.
                    const apiResult = await ApiElementValidation({

                        apiConfig,

                        value: finalResult.value,

                        fetcher: UrlAsyncFetch

                    });

                    if (!isRequestValid()) return;


                    // ---------------------------------------
                    // Step 9.5: Merge API Result
                    // ---------------------------------------

                    finalResult = resolveApiValidationResult(
                        apiResult,
                        finalResult
                    );

                } catch (error) {

                    if (!isRequestValid()) return;

                    console.error(
                        "TextBox API validation failed:",
                        error
                    );

                    finalResult = createValidationResult({
                        ...finalResult,
                        errorMessage: "Unable to validate at this time.",
                        successMessage: ""
                    });
                }
            }


            // ---------------------------------------
            // Step 9.6: Update Final Validation Result
            // ---------------------------------------

            if (!isRequestValid()) return;

            setFieldResult(finalResult);

            registerToForm(finalResult);


            // ---------------------------------------
            // Step 9.7: Notify Parent
            // ---------------------------------------

            onChangeRef.current?.(finalResult);

        };


        runValidation();


        // ---------------------------------------
        // Step 9.8: Cleanup
        // ---------------------------------------

        return () => {

            cancelled = true;

            cleanupTimeoutRef.current?.();

            cleanupTimeoutRef.current = null;

        };

    }, [textBoxValue, validationKey]);


    // ---------------------------------------
    // Step 10: Input Change Handler
    // ---------------------------------------

    const onTextBoxUpdate = (nextValue) => {

        // Invalidate previous requests.
        requestIdRef.current++;

        // Cancel pending debounce.
        cleanupTimeoutRef.current?.();

        cleanupTimeoutRef.current = null;


        // Update input value.
        setTextBoxValue(nextValue);


        // Clear previous messages.
        const initialResult = createValidationResult({
            value: nextValue
        });

        setFieldResult(initialResult);

    };


    // ---------------------------------------
    // Step 11: Feedback Messages
    // ---------------------------------------

    const FormErrorMessage = fieldResult.errorMessage;

    const FormSuccessMessage = fieldResult.successMessage;

    const isErrorMessageExist = Boolean(FormErrorMessage);

    const isSuccessMessageExist = Boolean(FormSuccessMessage);


    // ---------------------------------------
    // Step 12: Render
    // ---------------------------------------

    return (

        <>

            {label && (

                <label
                    htmlFor={id ?? name}
                    className={
                        showValidation
                            ? isErrorMessageExist
                                ? "form-label form-label-validation-invalid"
                                : "form-label form-label-validation-valid"
                            : "form-label"
                    }
                >

                    <b>{label} :</b>

                </label>

            )}


            <input
                className={
                    showValidation
                        ? isErrorMessageExist
                            ? "form-control dropdown-toggle form-control-validation-invalid"
                            : "form-control dropdown-toggle form-control-validation-valid"
                        : "form-control dropdown-toggle"
                }

                style={
                    width
                        ? { width: `${width}px` }
                        : undefined
                }

                placeholder={placeholder}

                id={id ?? name}

                name={name}

                value={textBoxValue}

                onChange={event =>
                    onTextBoxUpdate(event.target.value)
                }

                disabled={disabled}
            />


            {/* Error Message */}

            {showValidation && isErrorMessageExist && (

                <div
                    align="right"
                    className="form-feedback-validation-invalid"
                    style={{ fontSize: "11px" }}
                >

                    <InfoIcon /> {FormErrorMessage}

                </div>

            )}


            {/* Success Message */}

            {showValidation &&
                isSuccessMessageExist &&
                !isErrorMessageExist && (

                    <div
                        align="right"
                        className="form-feedback-validation-valid"
                        style={{ fontSize: "11px" }}
                    >

                        <InfoIcon /> {FormSuccessMessage}

                    </div>

                )}

        </>

    );

};
