import React, { useState, useEffect } from "react";
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";

export const TextArea = ({ name, label, placeholder, value, lines, validation }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [show, setShow] = useState(false);
  const initialValue = ( (value === undefined) ? '' : value );
  const [textAreaValue, setTextAreaValue] = useState( initialValue );
  // const [validationStatus, setValidationStatus] = useState({});
  const FormMode =  form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
  
  useEffect(()=>{
    if( FormMode === FORM_RESET ){
      setTextAreaValue(initialValue);
    }
  },[FormMode]);

  const DataFilter = (val, status) => {
    setTextAreaValue(val);
    setShow(status);
  };

  const textAreaValidate = async() =>{
     // validation
     let result = { value: textAreaValue };
     if (validation !== undefined) {
       result = await FormInputValidate(validation, textAreaValue);
     }
     // form Data
     if(formName!==undefined && form?.[formName]!==undefined){
       formContext?.setForm(formName, { [name]: result });
     }
  };

  useEffect(() => {
    textAreaValidate();
  }, [textAreaValue]);

  const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || textAreaValue?.length > 0);
  const isErrorMessageExist = (FormErrorMessage?.length > 0);

  return (<>
    {label && (<label className={(validateOnSubmit ?
      (isErrorMessageExist ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label}:</b></label>)}
    <div className="dropdown"
      tabIndex={1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShow(false);
        }
      }}>
      <textarea name={name}  rows={lines} 
        className={(validateOnSubmit ?
          (isErrorMessageExist ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")}
        placeholder={placeholder} data-bs-toggle="dropdown" aria-expanded="false"
        value={textAreaValue}
        onChange={(e) => { DataFilter(e.target.value, true); }}
      ></textarea>
      
      {(validateOnSubmit && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
      }

    </div>
  </>);
};