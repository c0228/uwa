import { toTextTransform, UrlAsyncFetch } from "e-ui-react";

export const FormSwitchValidate = async (type, validation, value) => {
 // value is an Array
 const validationSteps = Object.keys(validation);
 const validationSuccess = [];
 let result;
 for (let validateStep in validationSteps) {
  const step = validationSteps[validateStep];
  // console.log("step: ",step);
  if (step === 'validate') {
   let errorMessage = [];
   if (errorMessage.length === 0) {
    validationSuccess.push(step);
   } else {
    errorMessage.push(validation[step](value));
   }
   result = { validationSuccess, value, errorMessage };
  } else {
   let errorMessage = [];
   if (
    (step === 'required' && value?.length === 0) ||
    (type === 'checkbox' &&
     step === 'minSelect' &&
     value?.length < validation[step]?.value) ||
    (type === 'checkbox' &&
     step === 'maxSelect' &&
     value?.length > validation[step]?.value)
   ) {
    errorMessage.push(validation[step]?.errorMessage);
    result = { validationSuccess, value, errorMessage };
    // console.log("validationSuccess", validationSuccess, "value", value, "errorMessage: ", errorMessage);
    break;
   } else {
    validationSuccess.push(step);
    result = { validationSuccess, value, errorMessage };
   }
  }
 }
 // console.log('result', result);
 return result;
};