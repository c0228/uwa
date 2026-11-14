export const FormInputValidate = async (validation, textBoxValue) => {
 // console.log(validation, value);
 let value = textBoxValue;
 if (validation?.onSubmit?.textTransform) {
  value = toTextTransform(value, validation?.onSubmit?.textTransform);
 }
 const validationSteps = Object.keys(validation);
 console.log('validationSteps', validationSteps);
 const validationSuccess = [];
 let result;
 for (let validateStep in validationSteps) {
  const step = validationSteps[validateStep];
  let errorMessage = '';
  if (step === 'validate') {
   const errorMessage = validation[step](value);
   if (errorMessage.length === 0) {
    validationSuccess.push(step);
   }
   result = { validationSuccess, value, errorMessage };
  } else if (step === 'deps') {
  } else if (step === 'email') {
   let errorMessage = '';
   if (validation[step]?.formatCheck) {
    let validRegex =
     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value?.match(validRegex)) {
     let isEmailExist = validation[step]?.isEmailExist;
     if (isEmailExist !== undefined) {
      let url = isEmailExist?.url;
      let method = isEmailExist?.method;
      let response = isEmailExist?.value;
      if (
       url !== undefined &&
       method !== undefined &&
       response !== undefined &&
       errorMessage !== undefined
      ) {
       const data = await UrlAsyncFetch(url, method, { email: value });
       // console.log("data!==response", data, response);
       if (data?.trim() !== response.trim()) {
        errorMessage = isEmailExist?.errorMessage;
       }
       result = { validationSuccess, value, errorMessage };
      }
     } else {
      result = { validationSuccess, value, errorMessage };
     }
    } else {
     // Not Matched
     errorMessage = 'Please Enter a Valid Email Address';
     result = { validationSuccess, value, errorMessage };
    }
   }
  } else {
   if (
    (step === 'required' && validation[step]?.value === true && value?.toString()?.trim().length === 0) ||
    (step === 'minLength' &&
     value?.toString()?.trim().length < validation[step]?.value) ||
    (step === 'pattern' && !validation[step]?.value?.test(value)) ||
    (step === 'maxLength' &&
     value?.toString()?.trim().length > validation[step]?.value)
   ) {
    errorMessage = validation[step]?.errorMessage;
    result = { validationSuccess, value, errorMessage };
    // console.log("errorMessage: ", errorMessage);
    break;
   } else {
    validationSuccess.push(step);
    result = { validationSuccess, value, errorMessage };
   }
  }
 }
 console.log('result [final]', result);
 return result;
};