
import React, { useState, useEffect, useRef } from 'react';
import {
  getForm,
  FORM_SUBMITTED,
  FORM_RESET,
} from 'e-ui-react';

import { InfoIcon } from "@LibFormElements/common.js";
import { FormInputValidate } from "./validation.js";

export const TextArea = ({
  name,
  label,
  placeholder,
  value,
  lines,
  validation,
  onChange
}) => {

  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const inputRef = useRef(null);

  const initialValue = value === undefined ? '' : value;

  const [textAreaValue, setTextAreaValue] = useState(initialValue);

  const FormMode = form?.[formName]?.mode;

  const FormErrorMessage =
    form?.[formName]?.[name]?.errorMessage;

  // Check whether validation error exists
  const isErrorMessageExist =
    Array.isArray(FormErrorMessage)
      ? FormErrorMessage.length > 0
      : typeof FormErrorMessage === 'string'
        ? FormErrorMessage.length > 0
        : false;

  // Validation should be displayed after submission or user input
  const validateOnSubmit =
    FormMode === FORM_SUBMITTED ||
    textAreaValue?.toString()?.length > 0;

  // Register validation result into Form
  const RegisterToForm = (result) => {
    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, {
        [name]: result
      });
    }
  };

  // TextArea Validation
  const textAreaValidate = async (
    val,
    triggerOnChange = true
  ) => {

    let result = {
      value: val,
      validationSuccess: [],
      errorMessage: ''
    };

    if (validation !== undefined) {
      result = await FormInputValidate(validation, val);
    }

    RegisterToForm(result);

    if (triggerOnChange && onChange !== undefined) {
      await onChange(result);
    }

    return result;
  };

  // Initialize / Update external value
  useEffect(() => {
    const updatedValue = value ?? '';

    setTextAreaValue(updatedValue);
    textAreaValidate(updatedValue, false);
  }, [value]);

  // Reset Form
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      setTextAreaValue(initialValue);
      textAreaValidate(initialValue, false);
    }
  }, [FormMode]);

  // Handle TextArea Change
  const onTextAreaChange = async (val) => {
    setTextAreaValue(val);
    await textAreaValidate(val);
  };

  // Display error message
  const errorMessage = Array.isArray(FormErrorMessage)
    ? FormErrorMessage.join(', ')
    : FormErrorMessage;

  return (
    <>
      {label && (
        <label
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? 'form-label form-label-validation-invalid'
                : 'form-label form-label-validation-valid'
              : 'form-label'
          }
        >
          <b>{label} :</b>
        </label>
      )}

      <textarea
        ref={inputRef}
        id={name}
        name={name}
        rows={lines}
        className={
          validateOnSubmit
            ? isErrorMessageExist
              ? 'form-control dropdown-toggle form-control-validation-invalid'
              : 'form-control dropdown-toggle form-control-validation-valid'
            : 'form-control dropdown-toggle'
        }
        placeholder={placeholder}
        value={textAreaValue ?? ''}
        onChange={(e) => onTextAreaChange(e.target.value)}
        style={{
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}
      />

      {/* Validation Error Message */}
      {validateOnSubmit && isErrorMessageExist && (
        <div
          align="right"
          className="form-feedback-validation-invalid"
          style={{ fontSize: '11px' }}
        >
          <InfoIcon /> {errorMessage}
        </div>
      )}
    </>
  );
};
