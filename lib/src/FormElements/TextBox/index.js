import React, { useState, useEffect, useRef } from 'react';
import {
 FormInputValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';

export const TextBox = ({
 name,
 label,
 width,
 placeholder,
 value,
 validation,
 disabled,
 onChange,
}) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = value === undefined ? '' : value;
 const [textBoxValue, setTextBoxValue] = useState(initialValue);
 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 const inputRef = useRef(null);

 useEffect(() => {
  textBoxValidations(textBoxValue);
 }, [textBoxValue]);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   setTextBoxValue(initialValue);
  }
 }, [FormMode]);

 // Validations
 const textBoxValidations = async (value) => {
  let result = { value: value };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, value);
  }
  // form Data
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

 const onTextBoxUpdate = (textBoxValue) => {
  setTextBoxValue(textBoxValue);
 };

 const validateOnSubmit =
  FormMode === FORM_SUBMITTED || textBoxValue?.length > 0;
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
   <input
    className={
     validateOnSubmit
      ? isErrorMessageExist
        ? 'form-control form-control-validation-invalid'
        : 'form-control form-control-validation-valid'
      : 'form-control'
    }
    ref={inputRef}
    style={{ width: width + 'px' }}
    placeholder={placeholder}
    id={name}
    name={name}
    value={textBoxValue}
    onChange={(event) => onTextBoxUpdate(event.target.value)}
    disabled={disabled}
   />
   {validateOnSubmit && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid">
     {FormErrorMessage}
    </div>
   )}
  </>
 );
};
