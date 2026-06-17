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
 const inputRef = useRef(null);
 const initialValue = value === undefined ? '' : value;
 const [textAreaValue, setTextAreaValue] = useState(initialValue);

 useEffect(() => {
  setTextAreaValue(value ?? '');
 }, [value]);

 useEffect(() => {
  if (form?.[formName]?.mode === FORM_RESET) {
   setTextAreaValue(initialValue);
  }
 }, [form?.[formName]?.mode, initialValue]);

 const textAreaValidate = async (val) => {
  let result = { value: val };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, val);
  }
  if (formName !== undefined && form?.[formName] !== undefined) {
   formContext?.setForm(formName, { [name]: result });
  }
  if (onChange !== undefined) {
   await onChange(result);
    if (inputRef.current) {
    inputRef.current.focus(); // Focus on the input element
   }
  }
 };

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
    ref={inputRef}
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
    onChange={(e) => {
     setTextAreaValue(e.target.value);
     textAreaValidate(e.target.value);
    }}
    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
   />
   {validateOnSubmit && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid">
     {form?.[formName]?.[name]?.errorMessage}
    </div>
   )}
  </>
 );
};
