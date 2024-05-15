import React, { useState, useEffect } from "react";
import { Icon, FormPasswordValidation, getForm,  FORM_SUBMITTED, FORM_RESET } from "e-ui-react";

export const Password = ({ name, type, label, value, placeholder, validation })=>{

 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ? '' : value );
 const [passwordValue, setPasswordValue] = useState( initialValue );
 const errMessage = form?.[formName]?.[name]?.errorMessage;
 const pwdNoMatch = Array.isArray(errMessage) && (errMessage.includes('PASSWORD_NOT_MATCH') );
 const charValidated = Array.isArray(errMessage) && (!errMessage.includes('MINLENGTH_FAILED') && !errMessage.includes('MAXLENGTH_FAILED') );
 const lowerCaseValidation=Array.isArray(errMessage) && !errMessage.includes('LOWERCASE_FAILED');
 const upperCaseValidation=Array.isArray(errMessage) && !errMessage.includes('UPPERCASE_FAILED');
 const numberValidation=Array.isArray(errMessage) && !errMessage.includes('NUMBER_FAILED');
 const symbolValidation=Array.isArray(errMessage) && !errMessage.includes('SYMBOL_FAILED');

 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 useEffect(()=>{
   passwordValidations(passwordValue);
  },[passwordValue]);

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setPasswordValue(initialValue);
  }
 },[FormMode]);

   const passwordValidations = async(pwd)=>{
      let result = { value: pwd };
        if (validation !== undefined) {
            result = await FormPasswordValidation(validation, pwd);
        }
        console.log("result", name, result);
        // form Data
        if(formName!==undefined && form?.[formName]!==undefined){
         await formContext?.setForm(formName, { [name]: result });
        }
        console.log("form", form);
     };

  
   const onPasswordUpdate = (pwd)=>{
      setPasswordValue(pwd);
   };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || passwordValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);

 return (<>
 <label className={(validateOnSubmit ?
      (isErrorMessageExist ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label}:</b></label>
 <input id={name} name={name} type="password" className={(validateOnSubmit ?
    (isErrorMessageExist ? "form-control form-control-validation-invalid" :
      "form-control form-control-validation-valid")
    : "form-control")}
    value={passwordValue}
    placeholder={placeholder} 
    onChange={(event)=>onPasswordUpdate(event.target.value)} />
    {(type==='confirmPassword' && (passwordValue?.length>0) && (pwdNoMatch)) &&
        (<div align="right" className="form-feedback-validation-invalid">
          Password and Confirm Password doesn't match</div>)
    }
     {(validation && validateOnSubmit  && isErrorMessageExist) && 
        (<div style={{ fontSize:'12px', fontWeight:'bold', padding:'10px' }}>
        <div style={{ padding:'3px', color:(charValidated?'green':'red') }}>
            <Icon type="FontAwesome" name={charValidated?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should be in between 8-12 Characters</span>
        </div>
        <div style={{ padding:'3px', color:(lowerCaseValidation?'green':'red') }}>
            <Icon type="FontAwesome" name={lowerCaseValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Lowercase</span>
        </div>
        <div style={{ padding:'3px', color:(upperCaseValidation?'green':'red') }}>
            <Icon type="FontAwesome" name={upperCaseValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Uppercase</span>
        </div>
        <div style={{ padding:'3px', color:(numberValidation?'green':'red') }}>
            <Icon type="FontAwesome" name={numberValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Number</span>
        </div>
        <div style={{ padding:'3px', color:(symbolValidation?'green':'red') }}>
            <Icon type="FontAwesome" name={symbolValidation?"fa-check-circle":"fa-times-circle"} size="14" />
            <span style={{ paddingLeft:'8px' }}>It should contain a Symbol</span>
        </div>
     </div>)}
 </>);

};
