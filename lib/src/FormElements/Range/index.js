
import React, { useEffect, useState } from 'react';
import {
  getForm,
  FORM_SUBMITTED,
  FORM_RESET
} from 'e-ui-react';

import { InfoIcon } from "@LibFormElements/common.js";
import { FormRangeValidate } from "./validation.js";
import './index.css';

export const Range = ({
  name,
  label,
  value,
  start,
  end,
  validation
}) => {

  const min = start !== undefined ? Number(start) : 0;
  const max = end !== undefined ? Number(end) : 100;

  const setRangePosition = (value) => {
    if (max === min) return 0;
    return Number(((value - min) * 100) / (max - min));
  };

  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const initialValue = value !== undefined ? Number(value) : min;

  const [rangeValue, setRangeValue] = useState(initialValue);
  const [position, setPosition] = useState(setRangePosition(initialValue));
  const [validationStatus, setValidationStatus] = useState({
    value: initialValue,
    validationSuccess: [],
    errorMessage: ''
  });

  const FormMode = form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

  const isErrorMessageExist =
    typeof FormErrorMessage === 'string'
      ? FormErrorMessage.length > 0
      : Array.isArray(FormErrorMessage)
        ? FormErrorMessage.length > 0
        : false;

  const validateOnSubmit =
    FormMode === FORM_SUBMITTED || rangeValue !== min;

  // Register validation result into Form
  const RegisterToForm = (result) => {
    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, {
        [name]: result
      });
    }
  };

  // Validate Range Value
  const validateRangeVal = async (currentValue) => {

    let result = {
      value: currentValue,
      validationSuccess: [],
      errorMessage: ''
    };

    if (validation !== undefined) {
      result = await FormRangeValidate(validation, currentValue);
    }

    setValidationStatus(result);
    RegisterToForm(result);
  };

  // Validate when range changes
  useEffect(() => {
    validateRangeVal(rangeValue);
  }, [rangeValue]);

  // Reset Form
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      setRangeValue(initialValue);
      setPosition(setRangePosition(initialValue));
      setValidationStatus({
        value: initialValue,
        validationSuccess: [],
        errorMessage: ''
      });
    }
  }, [FormMode]);

  // Update Range
  const onRangeChange = (value) => {
    const updatedValue = Number(value);

    setPosition(setRangePosition(updatedValue));
    setRangeValue(updatedValue);
  };

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

      <div className="range-wrap">

        <input
          type="range"
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? 'range form-control-validation-invalid'
                : 'range form-control-validation-valid'
              : 'range'
          }
          id={name}
          name={name}
          value={rangeValue}
          min={min}
          max={max}
          onChange={(e) => onRangeChange(e.target.value)}
        />

        <output
          className="bubble"
          style={{
            left: `calc(${position}% + (${8 - position * 0.15}px))`
          }}
        >
          {rangeValue}
        </output>

        {validateOnSubmit &&
          validationStatus?.errorMessage?.length > 0 && (
            <div
              align="right"
              className="form-feedback-validation-invalid"
              style={{
                fontSize: '11px',
                paddingTop: '5px'
              }}
            >
              <InfoIcon /> {validationStatus.errorMessage}
            </div>
          )}

      </div>
    </>
  );
};
