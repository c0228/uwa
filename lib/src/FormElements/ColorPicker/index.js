import React, { useState, useEffect } from 'react';
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from 'e-ui-react';
import { InfoIcon } from "@LibFormElements/common.js";

export const ColorPicker = ({ name, label, value, validation }) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = value === undefined ? '' : value;
 const [colorPickerValue, setColorPickerValue] = useState(initialValue);

 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 const RegisterToForm = (result) =>{
  formContext?.setForm(formName, { [name]: result });
 };
 
 useEffect(()=>{
     setColorPickerValue(initialValue);
     RegisterToForm({ value: initialValue, validationSuccess:validation?Object.keys(validation):[], errorMessage:'NOT_VALIDATED' });
 },[value]);

 useEffect(() => {
  handleValidation(colorPickerValue);
 }, [colorPickerValue]);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   setColorPickerValue(initialValue);
  }
 }, [FormMode]);

 const handleValidation = async (value) => {
  // validation
  let result = { value: value };
  if (validation !== undefined) {
   result = await FormInputValidate(validation, value);
  }
  // form Data
  if (formName !== undefined && form?.[formName] !== undefined) {
   RegisterToForm(result);
  }
 };

 const ColorPickerChange = (value) => {
  setColorPickerValue(value);
 };

 const validateOnSubmit =
  FormMode === FORM_SUBMITTED || colorPickerValue?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;

 return (
  <div className="Colorpicker">
   {label && (
    <label
     className={
      validateOnSubmit
       ? isErrorMessageExist > 0
         ? 'form-label form-label-validation-invalid'
         : 'form-label form-label-validation-valid'
       : 'form-label'
     }
    >
     <b>{label} :</b>
    </label>
   )}
   <input
    type="color"
    className={
     validateOnSubmit
      ? isErrorMessageExist > 0
        ? 'form-control form-control-validation-invalid '
        : 'form-control form-control-validation-valid '
      : 'form-control '
    }
    id={name}
    name={name}
    value={colorPickerValue}
    title="Choose your color"
    onChange={(event) => ColorPickerChange(event.target.value)} />
   {validateOnSubmit && isErrorMessageExist && (
    <div align="right" className="form-feedback-validation-invalid" style={{ fontSize:'11px' }}>
      <InfoIcon /> {FormErrorMessage}
    </div>)}
  </div>
 );
};
