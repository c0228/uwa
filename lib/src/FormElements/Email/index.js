
import React, {
  useState,
  useEffect,
  useRef
} from 'react';

import {
  getForm,
  FORM_SUBMITTED,
  FORM_RESET
} from 'e-ui-react';

import { FormInputValidate } from './validation.js';
import { InfoIcon } from "@LibFormElements/common.js";

import './index.css';

export const Email = ({
  name,
  value,
  label = 'Email Address',
  placeholder = 'Enter Email Address',
  validation,
  disabled
}) => {

  const formContext = getForm();

  const formName = formContext?.name;
  const form = formContext?.form;

  const FormMode = form?.[formName]?.mode;

  const fieldData = form?.[formName]?.[name];

  const initialValue = value === undefined ? '' : value;

  const [emailValue, setEmailValue] = useState(initialValue);

  const [isTouched, setIsTouched] = useState(false);

  // Prevent older asynchronous validations overwriting newer results
  const validationRequest = useRef(0);

  const hasValidation =
    validation && Object.keys(validation).length > 0;

  // Register field data with Form
  const RegisterToForm = (result) => {

    if (formName !== undefined) {
      formContext?.setForm(formName, {
        [name]: result
      });
    }
  };

  // Validate Email
  const emailValidations = async (email) => {

    const requestId = ++validationRequest.current;

    let result = {
      value: email,
      validationSuccess: [],
      errorMessage: ''
    };

    if (hasValidation) {

      result = await FormInputValidate(
        validation,
        email
      );
    }

    // Ignore outdated validation responses
    if (requestId !== validationRequest.current) {
      return;
    }

    RegisterToForm(result);

    return result;
  };

  // Initialize / update value
  useEffect(() => {

    setEmailValue(initialValue);
    setIsTouched(false);

    validationRequest.current++;

    RegisterToForm({
      value: initialValue,
      validationSuccess: [],
      errorMessage: 'NOT_VALIDATED'
    });

  }, [value]);

  // Handle email changes
  const onEmailUpdate = (email) => {

    setEmailValue(email);
    setIsTouched(true);

    emailValidations(email);
  };

  // Form submission validation
  useEffect(() => {

    if (FormMode === FORM_SUBMITTED) {

      setIsTouched(true);

      emailValidations(emailValue);
    }

  }, [FormMode]);

  // Form reset
  useEffect(() => {

    if (FormMode === FORM_RESET) {

      validationRequest.current++;

      setEmailValue(initialValue);
      setIsTouched(false);

      RegisterToForm({
        value: initialValue,
        validationSuccess: [],
        errorMessage: 'NOT_VALIDATED'
      });
    }

  }, [FormMode]);

  // Validation state
  const isValidated =
    fieldData?.errorMessage !== undefined &&
    fieldData?.errorMessage !== 'NOT_VALIDATED';

  const isErrorMessageExist =
    isValidated && !!fieldData?.errorMessage;

  const isValidationSuccess =
    isValidated && !isErrorMessageExist;

  // Display validation after interaction or submission
  const showValidation =
    hasValidation &&
    (isTouched || FormMode === FORM_SUBMITTED) &&
    isValidated;

  return (
    <>

      {/* Label */}
      <label
        className={`form-label ${
          showValidation
            ? isErrorMessageExist
              ? 'form-label-validation-invalid'
              : isValidationSuccess
                ? 'form-label-validation-valid'
                : ''
            : ''
        }`}
      >
        <b>{label} :</b>
      </label>

      {/* Email Input */}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={emailValue}
        disabled={disabled}
        className={`form-control dropdown-toggle ${
          showValidation
            ? isErrorMessageExist
              ? 'form-control-validation-invalid'
              : isValidationSuccess
                ? 'form-control-validation-valid'
                : ''
            : ''
        }`}
        onChange={(event) => {
          onEmailUpdate(event.target.value);
        }}
      />

      {/* Error Message */}
      {showValidation && isErrorMessageExist && (

        <div
          align="right"
          className="form-feedback-validation-invalid"
          style={{ fontSize: '11px' }}
        >
          <InfoIcon /> {fieldData?.errorMessage}
        </div>

      )}

    </>
  );
};
