import React, { useState, useEffect } from 'react';
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from 'e-ui-react';
import { InfoIcon } from "@LibFormElements/common.js";
import './index.css';

export const Email = ({ name, value, validation, disabled }) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = value === undefined ? '' : value;
 const [emailValue, setEmailValue] = useState(initialValue);
 // const [validationStatus, setValidationStatus] = useState({});

 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 const hasValidation = validation && Object.keys(validation).length > 0;
 const showValidation = hasValidation && ((FormMode === FORM_SUBMITTED) || emailValue?.length > 0);
 const RegisterToForm = (result) =>{
  formContext?.setForm(formName, { [name]: result });
 };
 useEffect(()=>{
  setEmailValue(initialValue);
  RegisterToForm({ value: initialValue, validationSuccess:validation?Object.keys(validation):[], errorMessage:'NOT_VALIDATED' });
 },[value]);
 useEffect(() => {
  emailValidations(emailValue);
 }, []);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   setEmailValue(initialValue);
  }
 }, [FormMode]);

 // Validations
 const emailValidations = async (email) => {
  let result = { value: email };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, email);
   console.log(result);
   // setValidationStatus(result);
  }
  // form Data
  if (formName !== undefined && form?.[formName] !== undefined) {
   RegisterToForm(result);
  }
 };

 const onEmailUpdate = (email) => {
  setEmailValue(email);
  emailValidations(email);
 };

 const isErrorMessageExist = FormErrorMessage?.length > 0;

 return (
  <>
   <label
    className={
            showValidation
              ? FormErrorMessage
                ? "form-label form-label-validation-invalid"
                : "form-label form-label-validation-valid"
              : "form-label"
    }
   >
    <b>Email Address :</b>
   </label>
   <input
    type="text"
    placeholder="Enter Email Address"
    value={emailValue}
    disabled={disabled}
    className={
            showValidation
              ? FormErrorMessage
                ? "form-control dropdown-toggle form-control-validation-invalid"
                : "form-control dropdown-toggle form-control-validation-valid"
              : "form-control dropdown-toggle"
          }
    onChange={(event) => onEmailUpdate(event.target.value)}
   />
   {showValidation && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid" style={{ fontSize:'11px' }}>
     <InfoIcon /> {FormErrorMessage}
    </div>
   )}
  </>
 );
};
