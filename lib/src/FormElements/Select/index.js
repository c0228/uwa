
import React, { useState, useEffect } from 'react';
import {
    FormInputValidate,
    getForm,
    FORM_SUBMITTED,
    FORM_RESET,
    getResponsiveStyle
} from 'e-ui-react';

import { InfoIcon } from "@LibFormElements/common.js";
import './index.css';

export const Select = ({
    style,
    name,
    label,
    placeholder,
    value,
    validation,
    options,
    className,
    width,
    fontSize,
    onChange,
}) => {

    const formContext = getForm();
    const formName = formContext?.name;
    const form = formContext?.form;

    const initialValue = value === undefined ? '' : value;

    const [selectValue, setSelectValue] = useState(initialValue);

    const FormMode = form?.[formName]?.mode;
    const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

    // Only validate visually when required is configured.
    const isRequired = validation?.required?.value === true;

    const RegisterToForm = (result) => {
        formContext?.setForm(formName, {
            [name]: result
        });
    };

    const initialize = async (newValue) => {

        setSelectValue(newValue);

        let result = {
            value: newValue,
            validationSuccess: [],
            errorMessage: ''
        };

        if (validation !== undefined) {
            result = await FormInputValidate(validation, newValue);
        }

        RegisterToForm(result);
    };

    useEffect(() => {
        initialize(initialValue);
    }, [value]);

    useEffect(() => {
        if (FormMode === FORM_RESET) {
            setSelectValue(initialValue);
        }
    }, [FormMode]);

    const handleChange = async (event) => {

        const newValue = event.target.value;

        setSelectValue(newValue);

        if (onChange !== undefined) {
            onChange(event);
        }

        if (validation !== undefined) {

            const result = await FormInputValidate(validation, newValue);

            RegisterToForm(result);
        }
    };

    // Validation should be displayed only for required fields.
    const validateOnSubmit =
        isRequired && FormMode === FORM_SUBMITTED;

    const hasError =
        validateOnSubmit && !!FormErrorMessage;

    const hasValidValue =
        validateOnSubmit &&
        !hasError &&
        selectValue !== undefined &&
        selectValue !== null &&
        selectValue.toString().trim().length > 0;

    let sClassName = className || '';
    let sWidth = width === undefined ? '100%' : width;
    let sFontSize = fontSize === undefined ? '12' : fontSize;

    const selectStyles = {
        ...(style || {}),
        width: getResponsiveStyle(sWidth),
        fontSize: getResponsiveStyle(sFontSize),
    };

    let validationClass = '';

    if (validateOnSubmit) {
        if (hasError) {
            validationClass = 'form-control-validation-invalid';
        } else if (hasValidValue) {
            validationClass = 'form-control-validation-valid';
        }
    }

    return (
        <>
            {label && (
                <label
                    className={
                        validateOnSubmit
                            ? hasError
                                ? 'form-label form-label-validation-invalid'
                                : hasValidValue
                                    ? 'form-label form-label-validation-valid'
                                    : 'form-label'
                            : 'form-label'
                    }
                >
                    <b>{label} :</b>
                </label>
            )}

            <div className="dropdown">

                <select
                    className={`form-select ${validationClass} ${sClassName}`}
                    style={selectStyles}
                    value={selectValue}
                    onChange={handleChange}
                >

                    {placeholder && (
                        <option value="">
                            {placeholder}
                        </option>
                    )}

                    {options?.map((option, index) => (
                        <option
                            key={option.id || index}
                            id={option.id}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}

                </select>

                {hasError && (
                    <div
                        align="right"
                        className="form-feedback-validation-invalid"
                        style={{ fontSize: '11px' }}
                    >
                        <InfoIcon /> {FormErrorMessage}
                    </div>
                )}

            </div>
        </>
    );
};
