import React, { useState, useEffect } from "react";
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET, pxTovh  } from "e-ui-react";
import './index.css';

export const Select = ({ style, name, label, placeholder, value, validation, options, className, width, fontSize, onChange }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [show, setShow] = useState(false);
  const initialValue = ( (value === undefined) ?'' : value );
  const [selectValue, setSelectValue] = useState(initialValue);
  const FormMode =  form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

  useEffect(() => {
    SelectValidate();
  }, [selectValue]);

  useEffect(()=>{
    if( FormMode === FORM_RESET ){
      setSelectValue(initialValue);
    }
  }, [FormMode]);

  const DataFilter = (val, status) => {
    setSelectValue(val);
    setShow(status);
  };

  const SelectValidate = async() =>{
    // validation
    let result = { value: selectValue };
    if (validation !== undefined) {
      result = await FormInputValidate(validation, selectValue);
      console.log(result);
    }
    // form Data
    if(formName!==undefined && form?.[formName]!==undefined){
      formContext?.setForm(formName, { [name]: result });
    }
  };

  let sClassName = (className===undefined)?'':className;
  let sWidth = (width===undefined)?'':width;
  let sfontSize = (fontSize===undefined)?'':fontSize;

  const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || selectValue?.length > 0);
  const isErrorMessageExist = (FormErrorMessage?.length > 0);

  const mediaQuery = window.matchMedia('(max-width: 1200px)');

  let selectStyles = { ...(style || {}) }; // Merge additional styles if provided
  if(mediaQuery?.matches) {  selectStyles={...selectStyles, width: sWidth + 'px', fontSize: sfontSize + 'px', }; }
  else { selectStyles={...selectStyles, width: pxTovh(sWidth), fontSize: pxTovh(sfontSize) }; }

  return (<>
    {label && (<label className={(validateOnSubmit ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>)}
    <div className="dropdown"
      tabIndex={1}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setShow(false);
        }
      }}>
      <select className={((validateOnSubmit) ?
          ((isErrorMessageExist > 0) ? "form-select form-control-validation-invalid "+sClassName :
            "form-select form-control-validation-valid "+sClassName)
          : "form-select "+sClassName)}
        style={selectStyles} 
        value={selectValue} 
      onChange={(event)=>{ 
        setSelectValue( event.target.value );
        if(onChange!==undefined){ onChange(event); }
       }}>
     {placeholder && <option value="">{placeholder}</option>}
     {options?.map((option, index)=><option 
      // </select>selected={option.value===selectValue} 
      key={index} id={option.id} value={option.value}>{option.label}</option>)}
    </select>
      
      {((validateOnSubmit) && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
      }

    </div>
  </>);
};