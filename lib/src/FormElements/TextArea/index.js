import React, { useState, useEffect, useRef } from 'react';
import {
 FormInputValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';

export const TextArea = ({
 name,
 label,
 placeholder,
 value,
 lines,
 validation,
 onChange,
}) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;

 const initialValue = value === undefined ? '' : value;
 const [textAreaValue, setTextAreaValue] = useState(initialValue);

 useEffect(() => {
  if (form?.[formName]?.mode === FORM_RESET) {
   setTextAreaValue(initialValue);
  }
 }, [form?.[formName]?.mode, initialValue]);

 const textAreaValidate = async () => {
  let result = { value: textAreaValue };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, textAreaValue);
  }
  if (formName !== undefined && form?.[formName] !== undefined) {
   formContext?.setForm(formName, { [name]: result });
  }
  if (onChange !== undefined) {
   await onChange(result);
  }
 };

 useEffect(() => {
  textAreaValidate();
 }, [textAreaValue]);

 const validateOnSubmit =
  form?.[formName]?.mode === FORM_SUBMITTED || textAreaValue?.length > 0;
 const isErrorMessageExist = form?.[formName]?.[name]?.errorMessage?.length > 0;

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
    value={textAreaValue}
    onChange={(e) => {
     setTextAreaValue(e.target.value);
    }}
   />
   {validateOnSubmit && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid">
     {form?.[formName]?.[name]?.errorMessage}
    </div>
   )}
  </>
 );
};
