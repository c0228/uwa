import React, { useState, useEffect, useCallback } from 'react';
import {
 FormSwitchValidate,
 getForm,
 FORM_SUBMITTED,
 FORM_RESET,
} from 'e-ui-react';

export const Choice = ({ name, value, label, type, validation, layout }) => {
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 // const [validationStatus, setValidationStatus] = useState({});
 const initialValue = () => {
  return value?.map((v) => {
   let check = v?.checked === undefined ? false : v?.checked;
   let disable = v?.checked === undefined ? false : v?.disabled;
   return { ...v, checked: check, disabled: disable };
  });
 };
 const [choiceValue, setChoiceValue] = useState(initialValue);
 const FormMode = form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 const selectedChoiceValue = form?.[formName]?.[name]?.value;

 useEffect(() => {
  handleValidation(choiceValue);
 }, []);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   const val = initialValue();
   setChoiceValue(val);
   handleValidation(val);
  }
 }, [FormMode]);

 const handleValidation = useCallback(
  async (choiceValue) => {
   // validation
   let result = { value: choiceValue.filter((v) => v?.checked === true) };
   if (validation !== undefined) {
    result = await FormSwitchValidate(
     type,
     validation,
     choiceValue.filter((v) => v?.checked === true)
    );
   }
   // form Data
   if (formName !== undefined && form?.[formName] !== undefined) {
    formContext?.setForm(formName, { [name]: result });
   }
  },
  [form, formName, name, validation]
 );

 const handleClick = (type, e, id) => {
  if (type === 'checkbox') {
   handleCheckClick(e, id);
  }
  if (type === 'radio') {
   handleRadioClick(e, id);
  }
 };

 const handleCheckClick = (e, id) => {
  const newState = choiceValue.map((obj) => {
   if (obj.id === id) {
    return { ...obj, checked: e.target.checked };
   } else {
    return { ...obj };
   }
  });
  handleValidation(newState);
  setChoiceValue(newState);
 };

 const handleRadioClick = (e, id) => {
  const newState = choiceValue.map((obj) => {
   if (obj.id === id) {
    return { ...obj, checked: e.target.checked };
   } else {
    return { ...obj, checked: false };
   }
  });
  handleValidation(newState);
  setChoiceValue(newState);
 };

 const validateOnSubmit =
  FormMode === FORM_SUBMITTED || selectedChoiceValue?.length > 0;
 const isErrorMessageExist = FormErrorMessage?.length > 0;

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

   <div
    style={{
     color:
      FormErrorMessage?.length > 0 && selectedChoiceValue?.length > 0
       ? 'red'
       : '',
     fontWeight: 'bold',
    }}
   >
    {choiceValue.map((v, i) => {
     return (
      <div
       key={i}
       className="form-check"
       style={{ float: layout === 'horizontal' ? 'left' : 'none' }}
      >
       <input
        className="form-check-input"
        type={type}
        style={{ width: '1.2em', height: '1.2em' }}
        name={name}
        value={v?.value}
        id={name + '-' + v?.id}
        checked={v?.checked}
        disabled={v?.disabled}
        onChange={(event) => handleClick(type, event, v?.id)}
       />
       <label
        className="form-check-label"
        style={{
         display: 'flex',
         paddingTop: '1px',
         paddingRight: '15px',
         cursor: 'pointer',
        }}
        htmlFor={name + '-' + v?.id}
       >
        {v?.label}
       </label>
      </div>
     );
    })}
   </div>
  </>
 );
};
