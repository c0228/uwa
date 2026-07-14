import React, { useState, useEffect, useRef } from "react";
import { Icon, FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";
import { InfoIcon } from "@LibFormElements/common.js";

export const DateTimePicker = ({ type, label, name, value, minValue, maxValue, validation, onChange }) => {
  const t = type?.toLowerCase() || "";
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;
  const FormMode = form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
  const inputRef = useRef(null);
  const getInitialDateTimeValue = (val) => {
    if (t === "datetimepicker" && val) {
      const [date = "", time = ""] = val.split(" ");
      return { date, time };
    }
    return { date: "", time: "" };
  };
  const initialValue = value ?? "";
  const [dateTimePickerValue, setDateTimePickerValue] = useState(initialValue);
  const [tmpValue, setTmpValue] = useState(getInitialDateTimeValue(initialValue));
  const RegisterToForm = (result) =>{
    formContext?.setForm(formName, { [name]: result });
 };
  /**
   * Validation
   * Runs whenever the field value changes.
   */
  useEffect(() => {
    validateField();
  }, [dateTimePickerValue]);

  const formatDate = (date) => {
   return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
   });
 };

// Example
console.log(formatDate("1986-07-03")); // 03 July 1986
console.log(formatDate(new Date()));   // Today's date in DD Month YYYY format
  const validateField = async () => {
  let result = {
    value: dateTimePickerValue,
    validationSuccess: [],
    errorMessage: [],
  };

  if (validation !== undefined) {
    result = await FormInputValidate(validation, dateTimePickerValue);
  }

  // Min/Max validation
  if (dateTimePickerValue) {
    if (minValue && dateTimePickerValue < minValue) {
      result.errorMessage = [
        ...(result.errorMessage || []),
        `Date before ${formatDate(minValue)} is not accepted`,
      ];
    }

    if (maxValue && dateTimePickerValue > maxValue) {
      result.errorMessage = [
        ...(result.errorMessage || []),
        `Date after ${formatDate(maxValue)} is not accepted`,
      ];
    }
  }

  if(formName !== undefined && form?.[formName] !== undefined) {
    RegisterToForm(result);
  }

  if (onChange) {
    await onChange(result);
  }
};
  /*
  const validateField = async () => {
    let result = {
      value: dateTimePickerValue,
    };

    if (validation !== undefined) {
      result = await FormInputValidate(validation, dateTimePickerValue);
    }

    if (
      formName !== undefined &&
      form?.[formName] !== undefined
    ) {
      formContext?.setForm(formName, {
        [name]: result,
      });
    }

    if (onChange) {
      await onChange(result);
    }
  };
  */

  /**
   * Sync when parent value changes
   */
  useEffect(() => {
    const newValue = value ?? "";
    setDateTimePickerValue(newValue);
    if(t === "datetimepicker") {
      const [date = "", time = ""] = newValue.split(" ");
      setTmpValue({ date, time });
    }
    RegisterToForm({ value: newValue, validationSuccess:validation?Object.keys(validation):[], errorMessage:'NOT_VALIDATED' });
  }, [value, t]);

  /**
   * Handle form reset
   */
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      setDateTimePickerValue(initialValue);
      if (t === "datetimepicker") {
        const [date = "", time = ""] = initialValue.split(" ");
        setTmpValue({ date, time });
      } else {
        setTmpValue({ date: "", time: "" });
      }
    }
  }, [FormMode]);

  /**
   * Combine Date + Time
   */
  useEffect(() => {
    if (t !== "datetimepicker" || !tmpValue.date || !tmpValue.time) {
      return;
    }
    const combinedValue = `${tmpValue.date} ${tmpValue.time}`;
    if (combinedValue !== dateTimePickerValue) {
      setDateTimePickerValue(combinedValue);
    }
  }, [tmpValue, t, dateTimePickerValue]);

  /**
   * Input handlers
   */
  const DateTimePickerChange = (fieldValue) => {
    setDateTimePickerValue(fieldValue);
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

  const validateOnSubmit = FormMode === FORM_SUBMITTED || dateTimePickerValue?.length > 0;
  const isErrorMessageExist = FormErrorMessage?.length > 0;

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
        >
          <b>{label} :</b>
        </label>
      )}

      {t === "datepicker" && (
        <input
          ref={inputRef}
          type="date"
          id={name}
          name={name}
          value={dateTimePickerValue}
          min={minValue}
          max={maxValue}
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? "form-control form-control-validation-invalid"
                : "form-control form-control-validation-valid"
              : "form-control"
          }
          onChange={(e) =>
            DateTimePickerChange(e.target.value)
          }
        />
      )}

      {t === "timepicker" && (
        <input
          ref={inputRef}
          type="time"
          id={name}
          name={name}
          value={dateTimePickerValue}
          min={minValue}
          max={maxValue}
          className={
            validateOnSubmit
              ? isErrorMessageExist
                ? "form-control form-control-validation-invalid"
                : "form-control form-control-validation-valid"
              : "form-control"
          }
          onChange={(e) =>
            DateTimePickerChange(e.target.value)
          }
        />
      )}

      {t === "datetimepicker" && (
        <div style={{ height: "32px" }}>
          <div
            style={{
              width: "50%",
              float: "left",
            }}
          >
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
                    ? "form-control form-control-validation-invalid"
                    : "form-control form-control-validation-valid"
                  : "form-control"
              }
              onChange={(e) =>
                DatePickerChange(e.target.value)
              }
              style={{
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            />
          </div>

          <div
            style={{
              width: "50%",
              float: "left",
            }}
          >
            <input
              type="time"
              id={`${name}-time`}
              name={`${name}-time`}
              value={tmpValue.time}
              className={
                validateOnSubmit
                  ? isErrorMessageExist
                    ? "form-control form-control-validation-invalid"
                    : "form-control form-control-validation-valid"
                  : "form-control"
              }
              onChange={(e) =>
                TimePickerChange(e.target.value)
              }
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
                borderLeft: "0px",
              }}
            />
          </div>
        </div>
      )}

      {validateOnSubmit && isErrorMessageExist && (
        <div
          align="right"
          className="form-feedback-validation-invalid" style={{ fontSize:'11px' }}
        >
         <InfoIcon /> {FormErrorMessage}
        </div>
      )}
    </>
  );
};