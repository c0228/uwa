
import React, { useEffect, useState } from "react";
import {
  getForm,
  FORM_SUBMITTED,
  FORM_RESET
} from "e-ui-react";

import { InfoIcon } from "@LibFormElements/common.js";
import { FormSwitchValidate } from "./validation.js";
import "./index.css";

export const Switch = ({
  id,
  name,
  type = "checkbox",
  label,
  layout = "vertical",
  options = [],
  value,
  validation,
  disabled,
  onChange
}) => {

  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const initialValue = value !== undefined && value !== null
    ? value
    : (type === "checkbox" ? [] : "");

  const [switchValue, setSwitchValue] = useState(initialValue);

  const [validationStatus, setValidationStatus] = useState({
    value: initialValue,
    validationSuccess: [],
    errorMessage: ""
  });

  const FormMode = form?.[formName]?.mode;

  const FormErrorMessage =
    form?.[formName]?.[name]?.errorMessage;

  const isErrorMessageExist =
    typeof validationStatus?.errorMessage === "string"
      ? validationStatus.errorMessage.length > 0
      : Array.isArray(validationStatus?.errorMessage)
        ? validationStatus.errorMessage.length > 0
        : false;

  const hasSelection =
    type === "checkbox"
      ? Array.isArray(switchValue) && switchValue.length > 0
      : switchValue !== undefined &&
        switchValue !== null &&
        switchValue !== "";

  const validateOnSubmit =
    FormMode === FORM_SUBMITTED || hasSelection;

  // Register validation result into Form
  const RegisterToForm = (result) => {
    if (
      formName !== undefined &&
      form?.[formName] !== undefined
    ) {
      formContext?.setForm(formName, {
        [name]: result
      });
    }
  };

  // Switch Validation
  const switchValidations = async (
    currentValue,
    triggerOnChange = true
  ) => {

    let result = {
      value: currentValue,
      validationSuccess: [],
      errorMessage: ""
    };

    if (validation !== undefined) {
      result = await FormSwitchValidate(
        type,
        validation,
        currentValue
      );
    }

    setValidationStatus(result);

    RegisterToForm(result);

    if (triggerOnChange && onChange !== undefined) {
      await onChange(result);
    }

    return result;
  };

  // Initialize Switch
  const initialize = async (currentValue) => {

    const updatedValue =
      currentValue !== undefined && currentValue !== null
        ? currentValue
        : (type === "checkbox" ? [] : "");

    setSwitchValue(updatedValue);

    await switchValidations(updatedValue, false);
  };

  // Initialize / Update external value
  useEffect(() => {
    initialize(value);
  }, [value]);

  // Reset Form
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      initialize(initialValue);
    }
  }, [FormMode]);

  // Handle Selection
  const handleClick = async (selectedValue) => {

    let newValue;

    if (type === "checkbox") {

      const currentValues = Array.isArray(switchValue)
        ? switchValue
        : [];

      newValue = currentValues.includes(selectedValue)
        ? currentValues.filter(v => v !== selectedValue)
        : [...currentValues, selectedValue];

    } else {
      newValue = selectedValue;
    }

    setSwitchValue(newValue);

    await switchValidations(newValue);
  };

  const errorMessage =
    validationStatus?.errorMessage || FormErrorMessage;

  return (
    <>
      {label && (
        <label
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? "form-label form-label-validation-invalid"
                : "form-label form-label-validation-valid"
              : "form-label"
          }
          style={{ lineHeight: "22px" }}
        >
          <b>{label} :</b>
        </label>
      )}

      <div
        style={{
          color: validateOnSubmit && isErrorMessageExist
            ? "red"
            : "",
          fontWeight: "bold"
        }}
      >

        {options?.map((v, i) => {

          const isChecked =
            type === "checkbox"
              ? switchValue.includes(v.value)
              : switchValue === v.value;

          const optionId = name + "-" + (v?.id ?? i);

          return (
            <div
              key={optionId}
              className="form-check form-switch"
              style={{
                float: layout === "horizontal" ? "left" : "none"
              }}
            >

              <input
                className={
                  "form-check-input" +
                  (
                    validateOnSubmit
                      ? isErrorMessageExist
                        ? " form-control-validation-invalid"
                        : " form-control-validation-valid"
                      : ""
                  )
                }
                type={type}
                name={name}
                value={v?.value}
                id={optionId}
                checked={isChecked}
                disabled={disabled || v?.disabled}
                onChange={() => handleClick(v?.value)}
                style={{ cursor: disabled || v?.disabled ? "not-allowed" : "pointer" }}
              />

              <label
                className={
                  validateOnSubmit
                    ? isErrorMessageExist
                      ? "form-check-label form-label-validation-invalid"
                      : "form-check-label form-label-validation-valid"
                    : "form-check-label"
                }
                style={{
                  display: "flex",
                  paddingRight: "15px",
                  cursor: disabled || v?.disabled ? "not-allowed" : "pointer"
                }}
                htmlFor={optionId}
              >
                {v?.label}
              </label>

            </div>
          );
        })}

      </div>

      {/* Validation Error Message */}
      {validateOnSubmit && isErrorMessageExist && (
        <div
          align="right"
          className="form-feedback-validation-invalid"
          style={{ fontSize: "11px" }}
        >
          <InfoIcon /> {errorMessage}
        </div>
      )}

    </>
  );
};
