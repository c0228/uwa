import React, { useEffect, useState } from 'react';
import { FormRangeValidate, getForm, FORM_SUBMITTED, FORM_RESET  } from "e-ui-react";
import './index.css';

export const Range = ({ name, label, value, start, end, validation }) =>{
 const min = start?start:0;
 const max = end?end:100;
 const setRangePosition=(value)=>Number(((value - min) * 100) / (max - min));

 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = (value!==undefined?value:min);
 const [rangeValue, setRangeValue] = useState( initialValue );
 const [position, setPosition ] = useState(setRangePosition(rangeValue));
 const [validationStatus, setValidationStatus] = useState({});

 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 const RangeValidate =async()=>{
  let result = { value: rangeValue };
  if (validation !== undefined) {
  result = await FormRangeValidate(validation, rangeValue);
  setValidationStatus(result);
  }
  // form Data
  if(formName!==undefined && form?.[formName]!==undefined){
  formContext?.setForm(formName, { [name]: result });
  }
 };

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setRangeValue(initialValue);
    setPosition(setRangePosition(initialValue));
  }
}, [FormMode]);

 useEffect(()=>{ 
  RangeValidate();
 },[rangeValue]);

 const onRangeChange = (value)=>{
  setPosition(setRangePosition(value));
  setRangeValue(value);
 };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || rangeValue > min);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);

 return(<>
  {label && (<label className={(validateOnSubmit ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>)}
    <div className="range-wrap">
      <input type="range" className="range" id={name} name={name} value={rangeValue} min={min} max={max}
              onChange={(e)=>onRangeChange(e.target.value)}  />
      {<output className="bubble" style={{ left: `calc(${position}% + (${8 - position * 0.15}px))` }}>
        {rangeValue}</output>}
        <div style={{ position:'absolute', width:'100%', zIndex:'-1' }}>
      {((form?.[formName]?.submitted || rangeValue?.toString()?.length > 0) &&
        validationStatus?.errorMessage?.length > 0) &&
        <div align="right" className="form-feedback-validation-invalid">
          {validationStatus?.errorMessage}</div>}
          </div>
    </div>

    

 </>);
};