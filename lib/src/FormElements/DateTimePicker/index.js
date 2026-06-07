import React, { useState, useEffect, useRef } from 'react';
import {
  FormInputValidate,
  getForm,
  FORM_SUBMITTED,
  FORM_RESET,
} from 'e-ui-react';

export const DateTimePicker = ({
  type,
  label,
  name,
  value,
  minValue,
  maxValue,
  validation,
  onChange,
}) => {
  const t = type?.toLowerCase() || '';

  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const FormMode = form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

  const inputRef = useRef(null);

  const getInitialDateTimeValue = (val) => {
    if (t === 'datetimepicker' && val) {
      const [date = '', time = ''] = val.split(' ');
      return { date, time };
    }
    return { date: '', time: '' };
  };

  const [dateTimePickerValue, setDateTimePickerValue] = useState(value || '');
  const [tmpValue, setTmpValue] = useState(
    getInitialDateTimeValue(value)
  );

  /**
   * Sync component state when parent value changes
   */
  useEffect(() => {
    const newValue = value || '';

    setDateTimePickerValue(newValue);

    if (t === 'datetimepicker') {
      const [date = '', time = ''] = newValue.split(' ');
      setTmpValue({ date, time });
    }
  }, [value, t]);

  /**
   * Handle form reset
   */
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      const newValue = value || '';

      setDateTimePickerValue(newValue);

      if (t === 'datetimepicker') {
        const [date = '', time = ''] = newValue.split(' ');
        setTmpValue({ date, time });
      } else {
        setTmpValue({ date: '', time: '' });
      }
    }
  }, [FormMode, value, t]);

  /**
   * Combine date and time
   */
  useEffect(() => {
    if (
      t === 'datetimepicker' &&
      tmpValue.date &&
      tmpValue.time
    ) {
      const combinedValue = `${tmpValue.date} ${tmpValue.time}`;

      if (combinedValue !== dateTimePickerValue) {
        setDateTimePickerValue(combinedValue);
        handleValidation(combinedValue);
      }
    }
  }, [tmpValue]);

  /**
   * Validation Handler
   */
  const handleValidation = async (fieldValue) => {
    let result = { value: fieldValue };

    if (validation !== undefined) {
      result = await FormInputValidate(validation, fieldValue);
    }

    if (formName && form?.[formName]) {
      formContext?.setForm(formName, {
        [name]: result,
      });
    }

    if (onChange) {
      await onChange(result);

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const DateTimePickerChange = async (fieldValue) => {
    setDateTimePickerValue(fieldValue);
    await handleValidation(fieldValue);
  };

  const DatePickerChange = (fieldValue) => {
    setTmpValue((prev) => ({
      ...prev,
      date: fieldValue,
    }));
  };

  const TimePickerChange = (fieldValue) => {
    setTmpValue((prev) => ({
      ...prev,
      time: fieldValue,
    }));
  };

  const validateOnSubmit =
    FormMode === FORM_SUBMITTED || dateTimePickerValue?.length > 0;

  const isErrorMessageExist = FormErrorMessage?.length > 0;

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

      {t === 'datepicker' && (
        <input
          type="date"
          ref={inputRef}
          id={name}
          name={name}
          value={dateTimePickerValue}
          min={minValue}
          max={maxValue}
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? 'form-control form-control-validation-invalid'
                : 'form-control form-control-validation-valid'
              : 'form-control'
          }
          onChange={(e) => DateTimePickerChange(e.target.value)}
        />
      )}

      {t === 'timepicker' && (
        <input
          type="time"
          ref={inputRef}
          id={name}
          name={name}
          value={dateTimePickerValue}
          min={minValue}
          max={maxValue}
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? 'form-control form-control-validation-invalid'
                : 'form-control form-control-validation-valid'
              : 'form-control'
          }
          onChange={(e) => DateTimePickerChange(e.target.value)}
        />
      )}

      {t === 'datetimepicker' && (
        <div style={{ height: '32px' }}>
          <div style={{ width: '50%', float: 'left' }}>
            <input
              type="date"
              id={`${name}-date`}
              name={`${name}-date`}
              value={tmpValue.date}
              min={minValue}
              max={maxValue}
              className={
                validateOnSubmit
                  ? isErrorMessageExist
                    ? 'form-control form-control-validation-invalid'
                    : 'form-control form-control-validation-valid'
                  : 'form-control'
              }
              onChange={(e) => DatePickerChange(e.target.value)}
              style={{
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
              }}
            />
          </div>

          <div style={{ width: '50%', float: 'left' }}>
            <input
              type="time"
              id={`${name}-time`}
              name={`${name}-time`}
              value={tmpValue.time}
              className={
                validateOnSubmit
                  ? isErrorMessageExist
                    ? 'form-control form-control-validation-invalid'
                    : 'form-control form-control-validation-valid'
                  : 'form-control'
              }
              onChange={(e) => TimePickerChange(e.target.value)}
              style={{
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px',
                borderLeft: '0px',
              }}
            />
          </div>
        </div>
      )}

      {validateOnSubmit && isErrorMessageExist && (
        <div
          align="right"
          className="form-feedback-validation-invalid"
        >
          {FormErrorMessage}
        </div>
      )}
    </>
  );
};