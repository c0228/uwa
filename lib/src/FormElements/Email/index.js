import React, { useState, useEffect } from "react";
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";
import './index.css';

export const Email =({ name, value, validation, disabled })=>{
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ? '' : value );
 const [emailValue, setEmailValue] = useState( initialValue );
 // const [validationStatus, setValidationStatus] = useState({});
 
 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 
useEffect(()=>{
  emailValidations(emailValue);
},[]);

useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setEmailValue(initialValue);
  }
},[FormMode]);

 // Validations
 const emailValidations = async(email)=>{
  let result={ value: email };
    if (validation !== undefined) {
        result = await FormInputValidate(validation, email); 
        console.log(result);
        // setValidationStatus(result);
    }
    // form Data
    if(formName!==undefined && form?.[formName]!==undefined){
      formContext?.setForm(formName, { [name]: result });
    }
 };

 const onEmailUpdate=(email)=>{
    setEmailValue(email);
    emailValidations(email);
 };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || emailValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);

 return (<>
 <label className={(validateOnSubmit ?
      (isErrorMessageExist ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>Email Address:</b></label>
 <input type="text" placeholder="Enter Email Address" value={emailValue} disabled={disabled}
 className={(validateOnSubmit ?
    (isErrorMessageExist ? "form-control form-control-validation-invalid" :
      "form-control form-control-validation-valid")
    : "form-control")}
 onChange={(event)=>onEmailUpdate(event.target.value)} />
 {(validateOnSubmit && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}
        </div>
  }
 </>);
};
