import React,  { useState, useEffect } from 'react';
import { FormInputValidate, getForm, Icon, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";
import './index.css';

export const TextSearch = ({ name, label, placeholder, width, value, validation  }) =>{
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ?'' : value );
 const [textBoxValue, setTextBoxValue] = useState(initialValue);
 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 
 useEffect(()=>{
   textBoxValidations(textBoxValue);
 },[textBoxValue]);

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setTextBoxValue(initialValue);
  }
},[FormMode]);

// Validations
 const textBoxValidations = async(textBoxValue)=>{
  let result;
  if (validation !== undefined) {
    result = await FormInputValidate(validation, textBoxValue);
   // console.log("result [textBoxValidations]", result);
   // setValidationStatus(result);
  }
      // form Data
      if(formName!==undefined && form?.[formName]!==undefined){
        formContext?.setForm(formName, { [name]: result });
      }
 };
  
 const onTextBoxUpdate=(textBoxValue)=>{
  setTextBoxValue(textBoxValue);
 };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || textBoxValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);
 return(<>
{label && (<label className={(validateOnSubmit?
      (isErrorMessageExist ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>)}
 <div className="b5-text-search" style={{ width: width }}>
 <input className={(validateOnSubmit ? (isErrorMessageExist ? "form-control form-control-validation-invalid" :
       "form-control form-control-validation-valid") : "form-control")}
    placeholder={placeholder} 
    id={name} 
    name={name} 
    value={textBoxValue}
    onChange={(event)=>onTextBoxUpdate(event.target.value)} />
     <Icon type="FontAwesome" name="fa-search" size="12" />
  </div>
 {(validateOnSubmit && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
      }
</>);
};