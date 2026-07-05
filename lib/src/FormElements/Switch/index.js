import React, { useEffect, useRef, useState } from "react";
import { FormSwitchValidate, getForm, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";
import { InfoIcon } from "@LibFormElements/common.js";
import "./index.css";

export const Switch = ({ id, name, type = "checkbox", label, layout = "vertical",
    options = [], value, validation, disabled, onChange }) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = (type === "checkbox") ? [] : "";
 const [switchValue, setSwitchValue] = useState(initialValue);
 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 const validateOnSubmit = FormMode === FORM_SUBMITTED || switchValue?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;

 const prevValue = useRef();
 const initialize = async(value) =>{
   let switchValue = initialValue;
   if(value !== undefined && value !== null) {
      switchValue = value;
   }
   setSwitchValue(switchValue);
   await switchValidations(switchValue, false);
 };

 useEffect(()=>{
  console.log("triggered", value);
    initialize(value);
 },[value]);

 useEffect(() => {
   if (FormMode === FORM_RESET) {
    initialize(value);
    // setSwitchValue(initialValue);
   }
 }, [FormMode]);
 const handleClick = async (selectedValue) => {
    console.log("handleClick[selectedValue]: ", selectedValue);
    let newValue;
    if (type === "checkbox") {
        newValue = switchValue.includes(selectedValue)
            ? switchValue.filter(v => v !== selectedValue)
            : [...switchValue, selectedValue];
    } else {
        newValue = selectedValue;
    }
    console.log("newValue: ", newValue);
    setSwitchValue(newValue);
    await switchValidations(newValue);
};
 const switchValidations = async (value, triggerOnChange = true) => {
   let result = { value: value };
   if (validation !== undefined) {
    result = await FormSwitchValidate(type, validation, value);
   }
   console.log("result[switchValidations-"+id+"]: ", value, result);
   // form Data
   if (formName !== undefined && form?.[formName] !== undefined) {
    formContext?.setForm(formName, { [name]: result });
   }
 
    if (triggerOnChange && onChange !== undefined) {
        await onChange(result);
    }
 };
 return (<>
   {label && (<label className={validateOnSubmit? 
    (isErrorMessageExist > 0?'form-label form-label-validation-invalid':'form-label form-label-validation-valid')
       :'form-label'} style={{ lineHeight:'22px' }}><b>{label} :</b></label>)}
   <div style={{ color: (FormErrorMessage?.length > 0 && switchValue?.length > 0)? 'red': '', fontWeight: 'bold' }}>
    {options?.map((v, i) =>{
     const isChecked = (type === "checkbox") ? switchValue.includes(v.value) : switchValue === v.value;
     return (<div key={i} className="form-check form-switch" style={{ float: layout === 'horizontal' ? 'left' : 'none' }}>
      <input className="form-check-input" type={type} name={name} value={v?.value} id={name + '-' + v?.id}
       checked={isChecked} disabled={v?.disabled} onChange={(event) => handleClick(v?.value)} style={{ cursor: 'pointer' }} />
      <label className={validateOnSubmit? 
        (isErrorMessageExist > 0?'form-check-label form-label-validation-invalid':'form-check-label form-label-validation-valid')
       :'form-check-label'} 
      style={{ display: 'flex', paddingRight: '15px', cursor: 'pointer', fontSize:'11px' }} htmlFor={name + '-' + v?.id}>
        <InfoIcon /> {v?.label}</label>
     </div>);
    })}
   </div>
  </>
 );
};