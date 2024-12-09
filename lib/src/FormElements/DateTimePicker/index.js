import React, { useState, useEffect } from 'react';
import { FormInputValidate, getForm, FORM_SUBMITTED, FORM_RESET } from "e-ui-react";

export const DateTimePicker = ({ type, label, name, value, minValue, maxValue, validation }) =>{
 let t = (type===undefined)?'':type?.toLowerCase();
 
 /*console.log(type, t);
 const [ params, setParams ] = useState([]);

 useEffect(()=>{
  console.log(type);
  if(type==='dateTimePicker'){
    setParams([{ elementType:"datePicker",  id:id+"-date", name:name+"-date", value:value?.split(" ")[0] },
    { elementType:"timePicker",  id:id+"-time", name:id+"-time", value:value?.split(" ")[1] }]);
  }
 },[]);
console.log(t);
*/

const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ?'' : value );
 const tempInitialValue = { date:'', time:'' };
 const [dateTimePickerValue, setDateTimePickerValue] = useState(initialValue);
 const [ tmpValue, setTmpValue ] = useState(tempInitialValue);
 
 const FormMode =  form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 useEffect(() => {
  handleValidation(dateTimePickerValue);
 }, [dateTimePickerValue]);


 useEffect(()=>{
  if(t==='datetimepicker' && tmpValue?.date?.length>0 && tmpValue?.time?.length>0) {
    setDateTimePickerValue(tmpValue?.date+" "+tmpValue?.time); 
  }
 },[tmpValue]);

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setDateTimePickerValue(initialValue);
    setTmpValue(tempInitialValue);
  }
},[FormMode]);

 const handleValidation = async(value)=>{
  // validation
  let result = { value: value };
  if (validation !== undefined) {
  result = await FormInputValidate(validation, value);
  }
  // form Data
  if(formName!==undefined && form?.[formName]!==undefined){
   formContext?.setForm(formName, { [name]: result });
  }
 };

 const DateTimePickerChange = (value)=>{
      setDateTimePickerValue(value); 
 };

 const DatePickerChange = (value)=>{
  setTmpValue({...tmpValue, date: value});
 };

 const TimePickerChange = (value)=>{
  setTmpValue({...tmpValue, time: value});
 };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || dateTimePickerValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);

 return (<>
 {label && (<label className={(validateOnSubmit ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>)}
 {t==='datepicker' && 
 (<div>
    <input type="date" id={name} name={name} value={value} min={minValue} max={maxValue} className={((validateOnSubmit) ?
          ((isErrorMessageExist) ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")} 
    onChange={(e)=>DateTimePickerChange(e.target.value)} />
  </div>)}

 {t==='timepicker' && 
 (<div>
  <input type="time" id={name} name={name} value={value} className={((validateOnSubmit) ?
          ((isErrorMessageExist) ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")}
  onChange={(e)=>DateTimePickerChange(e.target.value)} />
  </div>)}

  {t==='datetimepicker' && 
 (<div style={{ height:'32px' }}>
    <div style={{ width: '50%', float:'left' }}>
      <input type="date" className={((validateOnSubmit) ?
          ((isErrorMessageExist) ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")} id={name+"-date"} name={name} value={tmpValue?.date} min={minValue} max={maxValue} 
        onChange={(e)=>DatePickerChange(e.target.value)} 
        style={{ borderTopRightRadius:'0px', borderBottomRightRadius:'0px' }}/>
    </div>
    <div style={{ width: '50%', marginBottom:'5px', float:'left' }}>
      <input type="time" className={((validateOnSubmit) ?
          ((isErrorMessageExist) ? "form-control dropdown-toggle form-control-validation-invalid" :
            "form-control dropdown-toggle form-control-validation-valid")
          : "form-control dropdown-toggle")} id={name+"-time"} name={name} value={tmpValue?.time}
        onChange={(e)=>TimePickerChange(e.target.value)} 
        style={{ borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px', borderLeft:'0px' }} />
    </div>
  </div>)}

  {((validateOnSubmit) &&
        isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
  }

 </>);
};