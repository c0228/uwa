import React, { useEffect } from 'react';
import { Password, getForm, FORM_RESET } from 'e-ui-react';

export const ConfirmPassword = ({ name, value, validation }) => {
 const element1 = name;
 const element2 = name + 'Confirm';

 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const FormMode = form?.[formName]?.mode;

 const formElement1 = form?.[formName]?.[element1];
 const formElement2 = form?.[formName]?.[element2];

 useEffect(() => {
  console.log(
   'formElement1',
   formElement1?.value,
   'formElement2',
   formElement2?.value
  );
  let errorMessage = formElement2?.errorMessage || [];
  if (formElement1?.value !== formElement2?.value) {
   if (
    formName !== undefined &&
    form?.[formName] !== undefined &&
    !errorMessage.includes('PASSWORD_NOT_MATCH')
   ) {
    errorMessage.push('PASSWORD_NOT_MATCH');
   }
  } else {
   errorMessage = errorMessage?.filter((item) => item !== 'PASSWORD_NOT_MATCH');
  }
  formContext?.setForm(formName, {
   [element2]: { ...formElement2, errorMessage },
  });
 }, [formElement1?.value, formElement2?.value]);

 useEffect(() => {
  if (FormMode === FORM_RESET) {
   const errorMessageFormElement1 = formElement1?.errorMessage;
   const errorMessageFormElement2 = formElement2?.errorMessage;
   formContext?.setForm(formName, {
    [element1]: {
     ...formElement1,
     errorMessage: errorMessageFormElement1?.filter(
      (item) => item !== 'PASSWORD_NOT_MATCH'
     ),
    },
    [element2]: {
     ...formElement2,
     errorMessage: errorMessageFormElement2?.filter(
      (item) => item !== 'PASSWORD_NOT_MATCH'
     ),
    },
   });
  }
 }, [FormMode]);

 return (
  <>
   {/*  onInputChange is additional attribute - WE NOT GENERALLY USED, SO NOT DOCUMENTED */}
   <div className="mtop15p">
    <Password
     name={element1}
     label="Account Password"
     value={value}
     placeholder="Enter Account Password"
     validation={validation}
    />
   </div>
   <div className="mtop15p">
    <Password
     name={element2}
     type="confirmPassword"
     label="Confirm Account Password"
     value={value}
     placeholder="Enter Confirm Account Password"
     validation={validation}
    />
   </div>
  </>
 );
};
