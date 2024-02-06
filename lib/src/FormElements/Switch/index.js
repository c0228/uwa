import React, { useState, useEffect, useCallback } from 'react';
import { FormSwitchValidate, getForm, FORM_SUBMITTED, FORM_RESET } from 'e-ui-react';

export const Switch = ({ name, value, label, type, validation, layout }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const initialValue = ()=>{
    return (value.map((v) => ({
        ...v,
        checked: v?.checked === undefined ? false : v?.checked,
        disabled: v?.checked === undefined ? false : v?.disabled,
      })));
  };

  const [switchValue, setSwitchValue] = useState(initialValue());
  const FormMode =  form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
  const selectedSwitchValue = form?.[formName]?.[name]?.value;
  
  useEffect(() => {
    handleValidation(switchValue);
  }, []);

  useEffect(()=>{
    if( FormMode === FORM_RESET ){
      const val = initialValue();
      setSwitchValue(val);
      handleValidation(val);
    }
  },[FormMode]);

  const handleValidation = useCallback(async(switchValue) => {
    let result = { value: switchValue.filter((v) => v?.checked === true) };
    if (validation !== undefined) {
      result = await FormSwitchValidate(type, validation, switchValue.filter((v) => v?.checked === true));
    }
    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, { [name]: result });
    }

  }, [form, formName, name, validation]);

  const handleClick = (type, e, id) => {
    if (type === 'checkbox') {
      handleCheckClick(e, id);
    }
    if (type === 'radio') {
      handleRadioClick(e, id);
    }
  };

  const handleCheckClick = (e, id) => {
    const newState = switchValue.map((obj) => {
      if (obj.id === id) {
        return { ...obj, checked: e.target.checked };
      } else {
        return { ...obj };
      }
    });
    setSwitchValue(newState);
    handleValidation(newState);
  };

  const handleRadioClick = (e, id) => {
    console.log( e.target.checked );
    const newState = switchValue.map((obj) => {
      if (obj.id === id) {
        return { ...obj, checked: e.target.checked };
      } else {
        return { ...obj }; // , checked: false
      }
    });
    console.log("handleRadioClick", newState);
    setSwitchValue(newState);
    handleValidation(newState);
  };

  const validateOnSubmit =  (FormMode === FORM_SUBMITTED) || selectedSwitchValue?.length > 0;
  const isErrorMessageExist = (FormErrorMessage?.length > 0);

 
  return (
    <>
{label && (<label className={((validateOnSubmit) ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label}:</b></label>)}

      <div style={{ color: (FormErrorMessage?.length > 0 && selectedSwitchValue?.length > 0) ? 'red' : '', fontWeight: 'bold' }}>
        {switchValue.map((v, i) => (
          <div key={i} className="form-check form-switch" style={{ float: (layout==='horizontal'?'left':'none' )}}>
            <input
              className="form-check-input"
              type={type}
              name={name}
              value={v?.value}
              id={name+"-"+v?.id}
              checked={v?.checked}
              disabled={v?.disabled}
              onChange={(event) => handleClick(type, event, v?.id)}
            />
            <label className="form-check-label" style={{ display:'flex', paddingRight:'15px', cursor:'pointer' }}
            htmlFor={name + "-" + v?.id}>{v?.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};
