
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
    getResponseId,
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
    onChange
}) => {

    // ---------------------------------------
    // Form Context
    // ---------------------------------------

    const formContext = getForm();

    const formName = formContext?.name;
    const form = formContext?.form;

    const initialValue = value ?? "";


    // ---------------------------------------
    // Component State
    // ---------------------------------------

    const [textBoxValue, setTextBoxValue] = useState(initialValue);

    const [fieldResult, setFieldResult] = useState({
        value: initialValue,
        validationSuccess: [],
        errorMessage: "",
        successMessage: ""
    });

    const [apiFeedback, setApiFeedback] = useState(null);


    // ---------------------------------------
    // Refs
    // ---------------------------------------

    const requestIdRef = useRef(0);
    const cleanupTimeoutRef = useRef(null);

    const onChangeRef = useRef(onChange);
    const validationRef = useRef(validation);

    // Keep latest props without adding them to effect dependencies.
    onChangeRef.current = onChange;
    validationRef.current = validation;


    // ---------------------------------------
    // Form Mode
    // ---------------------------------------

    const formMode = form?.[formName]?.mode;

    const showValidation =
        Boolean(validation && Object.keys(validation).length > 0) &&
        (
            formMode === FORM_SUBMITTED ||
            String(textBoxValue).length > 0
        );


    // ---------------------------------------
    // Register Result In Form
    // ---------------------------------------

    const registerToForm = (result) => {
        if (formName !== undefined && name) {
            formContext?.setForm(formName, {
                [name]: result
            });
        }
    };


    // ---------------------------------------
    // External Value Synchronization
    // ---------------------------------------

    useEffect(() => {
        setTextBoxValue(value ?? "");
    }, [value]);


    // ---------------------------------------
    // Form Reset
    // ---------------------------------------

    useEffect(() => {

        if (formMode === FORM_RESET) {

            // Invalidate pending API requests.
            requestIdRef.current++;

            cleanupTimeoutRef.current?.();
            cleanupTimeoutRef.current = null;

            const resetValue = value ?? "";

            setTextBoxValue(resetValue);

            setApiFeedback(null);

            const resetResult = {
                value: resetValue,
                validationSuccess: [],
                errorMessage: "",
                successMessage: ""
            };

            setFieldResult(resetResult);

            registerToForm(resetResult);
        }

    }, [formMode, value]);


    // ---------------------------------------
    // Validation Configuration
    // ---------------------------------------

    const validationKey = JSON.stringify(validation ?? {});


    // ---------------------------------------
    // Client + API Validation
    // ---------------------------------------

    useEffect(() => {

        let cancelled = false;

        const currentRequestId = ++requestIdRef.current;

        const runValidation = async () => {

            const currentValidation = validationRef.current ?? {};

            // ---------------------------------------
            // Step 1: Client-side validation
            // ---------------------------------------

            const result = ElementValidation(
                currentValidation,
                textBoxValue
            );

            if (
                cancelled ||
                currentRequestId !== requestIdRef.current
            ) {
                return;
            }

            // Store client-side validation result.
            const initialResult = {
                ...result,
                successMessage: ""
            };

            setFieldResult(initialResult);

            setApiFeedback(null);

            registerToForm(initialResult);


            // Stop if client-side validation fails.
            if (result.errorMessage) {
                return;
            }


            // ---------------------------------------
            // Step 2: Custom onChange Callback
            // ---------------------------------------

            let callbackResponseId = null;

            if (onChangeRef.current) {

                try {

                    const callbackResult = await onChangeRef.current(result);

                    // Callback may return a response ID.
                    if (typeof callbackResult === "string") {

                        callbackResponseId = callbackResult;

                    } else {

                        callbackResponseId = getResponseId(callbackResult);

                    }

                } catch (error) {

                    console.error(
                        "TextBox onChange failed:",
                        error
                    );

                }
            }


            if (
                cancelled ||
                currentRequestId !== requestIdRef.current
            ) {
                return;
            }


            // ---------------------------------------
            // Step 3: API Validation Configuration
            // ---------------------------------------

            const apiConfig = currentValidation.apiValidation ?? {};

            let apiResponseId = null;


            // ---------------------------------------
            // Step 4: Execute API Validation
            // ---------------------------------------

            if (apiConfig?.url && apiConfig?.method) {

                try {

                    // Debounce API request.
                    await new Promise(resolve => {

                        const timeoutId = setTimeout(resolve, 400);

                        cleanupTimeoutRef.current = () => {
                            clearTimeout(timeoutId);
                            resolve();
                        };

                    });

                    cleanupTimeoutRef.current = null;


                    // Check whether request is still valid.
                    if (
                        cancelled ||
                        currentRequestId !== requestIdRef.current
                    ) {
                        return;
                    }


                    // Execute API validation utility.
                    const apiResult = await ApiElementValidation({
                        apiConfig,
                        value: result.value,
                        fetcher: UrlAsyncFetch
                    });


                    if (
                        cancelled ||
                        currentRequestId !== requestIdRef.current
                    ) {
                        return;
                    }


                    apiResponseId = apiResult.responseId;

                    console.log("apiResponseId:", apiResponseId);


                } catch (error) {

                    if (
                        cancelled ||
                        currentRequestId !== requestIdRef.current
                    ) {
                        return;
                    }

                    const errorMessage =
                        "Unable to validate at this time.";

                    const errorResult = {
                        ...result,
                        errorMessage,
                        successMessage: ""
                    };

                    setFieldResult(errorResult);

                    setApiFeedback({
                        type: "error",
                        message: errorMessage
                    });

                    registerToForm(errorResult);

                    console.error(
                        "TextBox API validation failed:",
                        error
                    );

                    return;
                }
            }


            // ---------------------------------------
            // Step 5: Validate Request Status
            // ---------------------------------------

            if (
                cancelled ||
                currentRequestId !== requestIdRef.current
            ) {
                return;
            }


            // ---------------------------------------
            // Step 6: Resolve Response ID
            // ---------------------------------------

            // API response takes priority over callback response.
            const responseId = apiResponseId || callbackResponseId;


            // ---------------------------------------
            // Step 7: Match Configured Return Message
            // ---------------------------------------

            const matchedMessage = getApiMessage(
                responseId,
                apiConfig?.returnMessages ?? []
            );


            // No matching response message.
            if (!matchedMessage) {
                return;
            }


            const type = matchedMessage.type?.toLowerCase();

            const message =
                matchedMessage.message ??
                matchedMessage.successMessage ??
                "";


            if (
                (type !== "success" && type !== "error") ||
                !message
            ) {
                return;
            }


            // ---------------------------------------
            // Step 8: Update API Feedback
            // ---------------------------------------

            const feedback = {
                type,
                message,
                responseId
            };

            setApiFeedback(feedback);


            // ---------------------------------------
            // Step 9: Register Final Validation Result
            // ---------------------------------------

            const finalResult = {
                ...result,
                errorMessage: type === "error" ? message : "",
                successMessage: type === "success" ? message : "",
                apiResponseId: responseId
            };

            setFieldResult(finalResult);

            registerToForm(finalResult);

        };


        runValidation();


        // ---------------------------------------
        // Cleanup Pending Requests
        // ---------------------------------------

        return () => {

            cancelled = true;

            cleanupTimeoutRef.current?.();
            cleanupTimeoutRef.current = null;

        };

    }, [textBoxValue, validationKey]);


    // ---------------------------------------
    // Input Change Handler
    // ---------------------------------------

    const onTextBoxUpdate = (nextValue) => {

        // Invalidate pending requests.
        requestIdRef.current++;

        cleanupTimeoutRef.current?.();
        cleanupTimeoutRef.current = null;

        setTextBoxValue(nextValue);

        // Clear previous API feedback.
        setApiFeedback(null);

        // Clear previous validation messages.
        setFieldResult({
            value: nextValue,
            validationSuccess: [],
            errorMessage: "",
            successMessage: ""
        });

    };


    // ---------------------------------------
    // Feedback Messages
    // ---------------------------------------

    // Error Message
    const FormErrorMessage =
        fieldResult.errorMessage ||
        (apiFeedback?.type === "error" ? apiFeedback.message : "");


    // Success Message
    const FormSuccessMessage =
        fieldResult.successMessage ||
        (apiFeedback?.type === "success" ? apiFeedback.message : "");


    const isErrorMessageExist = Boolean(FormErrorMessage);

    const isSuccessMessageExist = Boolean(FormSuccessMessage);


    // ---------------------------------------
    // Render
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
            {isSuccessMessageExist && !isErrorMessageExist && (
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
