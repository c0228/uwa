import React, { useState, useEffect, useCallback } from 'react';
import {
 FormSwitchValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';

export const Switch = ({ name, value, label, type, validation, layout }) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;

 const initialValue = () => {
  return value.map((v) => ({
   ...v,
   checked: v?.checked === undefined ? false : v?.checked,
   disabled: v?.checked === undefined ? false : v?.disabled,
  }));
 };

 const [switchValue, setSwitchValue] = useState(initialValue());
 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 const selectedSwitchValue = form?.[formName]?.[name]?.value;

 useEffect(() => {
  console.log('handleValidation [useEffect]');
  handleValidation(switchValue);
 }, []);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   const val = initialValue();
   setSwitchValue(val);
   handleValidation(val);
  }
 }, [FormMode]);

 const handleValidation = useCallback(
  async (switchValue) => {
   let result = { value: switchValue.filter((v) => v?.checked === true) };
   if (validation !== undefined) {
    result = await FormSwitchValidate(type, validation, result?.value);
   }
   if (formName !== undefined && form?.[formName] !== undefined) {
    formContext?.setForm(formName, { [name]: result });
   }
  },
  [form, formName, name, validation]
 );

 // Sync validation with switchValue changes
 useEffect(() => {
  console.log(
   'switched value',
   switchValue,
   'selectedSwitchValue ',
   selectedSwitchValue
  );
  handleValidation(switchValue);
 }, [switchValue]);

 const handleClick = (e, id) => {
  setSwitchValue((prevData) => updateSwitchValues(prevData, e, id));
 };

 const updateSwitchValues = (switchValue, e, id) => {
  return switchValue?.map((item) =>
   item.id === id ? { ...item, checked: e.target.checked } : item
  );
 };

 const validateOnSubmit =
  FormMode === FORM_SUBMITTED || selectedSwitchValue?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;

 // Arrow function to render switch inputs
 const renderSwitches = () => {
  return (
   <div
    style={{
     color:
      FormErrorMessage?.length > 0 && selectedSwitchValue?.length > 0
       ? 'red'
       : '',
     fontWeight: 'bold',
    }}
   >
    {switchValue?.map((v, i) => (
     <div
      key={i}
      className="form-check form-switch"
      style={{ float: layout === 'horizontal' ? 'left' : 'none' }}
     >
      <input
       className="form-check-input"
       type={type}
       name={name}
       value={v?.value}
       id={name + '-' + v?.id}
       checked={v?.checked}
       disabled={v?.disabled}
       onChange={(event) => handleClick(event, v?.id)}
      />
      <label
       className="form-check-label"
       style={{ display: 'flex', paddingRight: '15px', cursor: 'pointer' }}
       htmlFor={name + '-' + v?.id}
      >
       {v?.label}
      </label>
     </div>
    ))}
   </div>
  );
 };
 return (
  <>
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

   {renderSwitches()}
  </>
 );
};
