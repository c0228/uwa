import React, { useState, useEffect, useRef } from 'react';
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from 'e-ui-react';
import { InfoIcon } from "@LibFormElements/common.js";
import { ElementValidation } from "./validation.js";

export const TextBox = ({ name, label, width, placeholder, value, validation, disabled, onChange }) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = value || '';
 const [textBoxValue, setTextBoxValue] = useState(initialValue);
 const FormMode = form?.[formName]?.mode;
 const FormSuccessMessage = form?.[formName]?.[name]?.successMessage;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 const hasValidation = validation && Object.keys(validation).length > 0;
 const showValidation = hasValidation && ((FormMode === FORM_SUBMITTED) || textBoxValue?.length > 0);
 const inputRef = useRef(null);
 const RegisterToForm = (result) =>{
  formContext?.setForm(formName, { [name]: result });
 };

 useEffect(()=>{
  setTextBoxValue(initialValue);
  let result = { value: initialValue, validationSuccess: [], errorMessage: [] };
  if (validation !== undefined) {
    result = ElementValidation(validation,initialValue);
  }
  RegisterToForm(result);
 },[value]);

 useEffect(() => {
  textBoxValidations(textBoxValue);
 }, [textBoxValue]);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   setTextBoxValue(initialValue);
  }
 }, [FormMode]);

 // Validations
 /*
 const textBoxValidations = async(value) => {
  let result = { value: value };
  if (validation !== undefined) {
   result = ElementValidation(validation, value);
  }
  // form Data
  if(formName !== undefined && form?.[formName] !== undefined) {
   RegisterToForm(result);
  }

  if (onChange !== undefined) {
   await onChange(result);
   if (inputRef.current) {
    inputRef.current.focus(); // Focus on the input element
   }
  }
 };
 */
 const textBoxValidations = async (value) => {
    let result = { value: value };

    if (validation !== undefined) {
        result = ElementValidation(validation, value);
    }

    if (formName !== undefined && form?.[formName] !== undefined) {
        RegisterToForm(result);
    }

    if (onChange !== undefined) {
        const response = await onChange(result);

        // Update success message from the backend response.
        if (response?.successMessage) {
            RegisterToForm({
                ...result,
                successMessage: response.successMessage
            });
        }
    }
};

 const onTextBoxUpdate = (textBoxValue) => {
  setTextBoxValue(textBoxValue);
 };

 const isSuccessMessageExist = FormSuccessMessage?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;
 return (
  <>
   {label && (
    <label
     className={
            showValidation
              ? FormErrorMessage
                ? "form-label form-label-validation-invalid"
                : "form-label form-label-validation-valid"
              : "form-label"
          }
    >
     <b>{label} :</b>
    </label>
   )}
   <input
    className={
            showValidation
              ? FormErrorMessage
                ? "form-control dropdown-toggle form-control-validation-invalid"
                : "form-control dropdown-toggle form-control-validation-valid"
              : "form-control dropdown-toggle"
          }
    ref={inputRef}
    style={{ width: width + 'px' }}
    placeholder={placeholder}
    id={name}
    name={name}
    value={textBoxValue ?? ''}
    onChange={(event) => onTextBoxUpdate(event.target.value)}
    disabled={disabled}
   />
   {showValidation && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid" style={{ fontSize:'11px' }}>
     <InfoIcon /> {FormErrorMessage}
    </div>
   )}

   {showValidation && isSuccessMessageExist && !isErrorMessageExist && (
    <div
        align="right"
        className="form-feedback-validation-valid"
        style={{ fontSize: '11px' }}>
        <InfoIcon /> {FormSuccessMessage}
    </div>)}
  </>
 );
};
