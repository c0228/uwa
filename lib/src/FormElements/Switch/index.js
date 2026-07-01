import React, { useEffect, useCallback } from "react";
import {
    FormSwitchValidate,
    getForm,
    FORM_SUBMITTED,
    FORM_RESET
} from "e-ui-react";
import "./index.css";

export const Switch = ({
    id,
    name,
    type = "checkbox",
    label,
    layout = "vertical",
    options = [],
    value = type === "checkbox" ? [] : "",
    validation,
    onChange
}) => {

    const formContext = getForm();
    const formName = formContext?.name;
    const form = formContext?.form;
    const FormMode = form?.[formName]?.mode;
    const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

    // Reset support
    useEffect(() => {
        if (FormMode === FORM_RESET && onChange) {
            onChange(type === "radio" ? "" : []);
        }
    }, [FormMode, type, onChange]);

    // Validation
    useEffect(() => {

    const validate = async () => {

        const selected =
            type === "radio"
                ? value
                : Array.isArray(value)
                    ? value
                    : [];

        let result = { value: selected };

        if (validation) {
            result = await FormSwitchValidate(
                type,
                validation,
                selected
            );
        }

        formContext?.setForm(formName, {
            [name]: result
        });

    };

    validate();

}, [
    value,
    validation,
    type,
    formName,
    name
]);

    const handleClick = (event, optionValue) => {

        let newValue;

        if (type === "radio") {

            newValue = optionValue;

        } else {

            if (event.target.checked) {

                newValue = [...value, optionValue];

            } else {

                newValue = value.filter(v => v !== optionValue);

            }

        }

        if (onChange) {
            onChange(newValue);
        }

    };

    return (
        <>
            {label && (
                <label
                    className={`form-label ${
                        FormMode === FORM_SUBMITTED &&
                        FormErrorMessage?.length
                            ? "form-label-validation-invalid"
                            : ""
                    }`}
                >
                    <b>{label} :</b>
                </label>
            )}

            <div>
                {options.map(option => {

                    const checked =
                        type === "radio"
                            ? value === option.value
                            : value.includes(option.value);

                    return (
                        <div
                            key={option.id}
                            className="form-check form-switch"
                            style={{
                                float:
                                    layout === "horizontal"
                                        ? "left"
                                        : "none"
                            }}
                        >
                            <input
                                className="form-check-input"
                                id={`${name}-${option.id}`}
                                type={type}
                                name={name}
                                value={option.value}
                                checked={checked}
                                disabled={option.disabled}
                                onChange={(e) =>
                                    handleClick(e, option.value)
                                }
                            />

                            <label
                                className="form-check-label"
                                htmlFor={`${name}-${option.id}`}
                                style={{
                                    cursor: "pointer",
                                    paddingRight: "15px"
                                }}
                            >
                                {option.label}
                            </label>
                        </div>
                    );

                })}
            </div>

            {FormErrorMessage && (
                <div className="text-danger">
                    {FormErrorMessage}
                </div>
            )}
        </>
    );

};