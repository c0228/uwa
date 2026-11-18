
import React, { useState, useEffect } from 'react';
import {
  Icon,
  FormPasswordValidation,
  getForm,
  FORM_SUBMITTED,
  FORM_RESET,
} from 'e-ui-react';

export const Password = ({
  name,
  type,
  label,
  value,
  placeholder,
  validation,
}) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const initialValue = value === undefined ? '' : value;

  const [passwordValue, setPasswordValue] = useState(initialValue);

  const FormMode = form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage || [];

  const pwdNoMatch =
    Array.isArray(FormErrorMessage) &&
    FormErrorMessage.includes('PASSWORD_NOT_MATCH');

  // Individual password validations
  const charValidated =
    !FormErrorMessage.includes('MINLENGTH_FAILED') &&
    !FormErrorMessage.includes('MAXLENGTH_FAILED');

  const lowerCaseValidation =
    !FormErrorMessage.includes('LOWERCASE_FAILED');

  const upperCaseValidation =
    !FormErrorMessage.includes('UPPERCASE_FAILED');

  const numberValidation =
    !FormErrorMessage.includes('NUMBER_FAILED');

  const symbolValidation =
    !FormErrorMessage.includes('SYMBOL_FAILED');

  const isErrorMessageExist = FormErrorMessage.length > 0;

  const validateOnSubmit =
    FormMode === FORM_SUBMITTED || passwordValue?.length > 0;

  // Validate Password
  const passwordValidations = async (pwd) => {
    let result = {
      value: pwd,
      validationSuccess: [],
      errorMessage: [],
    };

    if (validation !== undefined) {
      result = FormPasswordValidation(validation, pwd);
    }

    if (formName !== undefined && form?.[formName] !== undefined) {
      await formContext?.setForm(formName, {
        [name]: result,
      });
    }
  };

  useEffect(() => {
    passwordValidations(passwordValue);
  }, [passwordValue]);

  // Reset Password
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      setPasswordValue(initialValue);
    }
  }, [FormMode]);

  const onPasswordUpdate = (pwd) => {
    setPasswordValue(pwd);
  };

  // Required validation message
  const requiredError =
    isErrorMessageExist &&
    FormErrorMessage.includes('REQUIRED_FAILED');

  const requiredMessage =
    validation?.required?.errorMessage || 'This field is required';

  return (
    <>
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

      <input
        id={name}
        name={name}
        type="password"
        className={
          validateOnSubmit
            ? isErrorMessageExist
              ? 'form-control form-control-validation-invalid'
              : 'form-control form-control-validation-valid'
            : 'form-control'
        }
        value={passwordValue}
        placeholder={placeholder}
        onChange={(event) => onPasswordUpdate(event.target.value)}
      />

      {/* Required Error Message */}
      {validateOnSubmit && requiredError && (
        <div className="form-feedback-validation-invalid">
          {requiredMessage}
        </div>
      )}

      {/* Confirm Password Error */}
      {type === 'confirmPassword' &&
        passwordValue?.length > 0 &&
        pwdNoMatch && (
          <div align="right" className="form-feedback-validation-invalid">
            Password and Confirm Password doesn't match
          </div>
        )}

      {/* Password Strength Validations */}
      {validation?.passwordContains &&
        validateOnSubmit &&
        !requiredError && (
          <div
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              padding: '10px',
            }}
          >
            <div
              style={{
                padding: '3px',
                color: charValidated ? 'green' : 'red',
              }}
            >
              <Icon
                type="FontAwesome"
                name={charValidated ? 'fa-check-circle' : 'fa-times-circle'}
                size="14"
              />
              <span style={{ paddingLeft: '8px' }}>
                It should be in between 8-12 Characters
              </span>
            </div>

            <div
              style={{
                padding: '3px',
                color: lowerCaseValidation ? 'green' : 'red',
              }}
            >
              <Icon
                type="FontAwesome"
                name={
                  lowerCaseValidation
                    ? 'fa-check-circle'
                    : 'fa-times-circle'
                }
                size="14"
              />
              <span style={{ paddingLeft: '8px' }}>
                It should contain a Lowercase
              </span>
            </div>

            <div
              style={{
                padding: '3px',
                color: upperCaseValidation ? 'green' : 'red',
              }}
            >
              <Icon
                type="FontAwesome"
                name={
                  upperCaseValidation
                    ? 'fa-check-circle'
                    : 'fa-times-circle'
                }
                size="14"
              />
              <span style={{ paddingLeft: '8px' }}>
                It should contain an Uppercase
              </span>
            </div>

            <div
              style={{
                padding: '3px',
                color: numberValidation ? 'green' : 'red',
              }}
            >
              <Icon
                type="FontAwesome"
                name={
                  numberValidation
                    ? 'fa-check-circle'
                    : 'fa-times-circle'
                }
                size="14"
              />
              <span style={{ paddingLeft: '8px' }}>
                It should contain a Number
              </span>
            </div>

            <div
              style={{
                padding: '3px',
                color: symbolValidation ? 'green' : 'red',
              }}
            >
              <Icon
                type="FontAwesome"
                name={
                  symbolValidation
                    ? 'fa-check-circle'
                    : 'fa-times-circle'
                }
                size="14"
              />
              <span style={{ paddingLeft: '8px' }}>
                It should contain a Symbol
              </span>
            </div>
          </div>
        )}
    </>
  );
};
