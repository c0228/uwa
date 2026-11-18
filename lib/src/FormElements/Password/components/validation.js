
export const FormPasswordValidation = (validation, value) => {

  const validationSteps = Object.keys(validation || {});

  const validationSuccess = [];
  const errorMessage = [];

  const textValue = value?.toString() || '';
  const trimmedValue = textValue.trim();

  for (const step of validationSteps) {

    // Required Validation
    if (step === 'required') {
      if (
        validation[step]?.value === true &&
        trimmedValue.length === 0
      ) {
        errorMessage.push('REQUIRED_FAILED');
      } else {
        validationSuccess.push(step);
      }
    }

    // Minimum Length Validation
    if (step === 'minLength') {
      if (trimmedValue.length < validation[step]?.value) {
        errorMessage.push('MINLENGTH_FAILED');
      } else {
        validationSuccess.push(step);
      }
    }

    // Maximum Length Validation
    if (step === 'maxLength') {
      if (trimmedValue.length > validation[step]?.value) {
        errorMessage.push('MAXLENGTH_FAILED');
      } else {
        validationSuccess.push(step);
      }
    }

    // Password Contains Validation
    if (step === 'passwordContains') {

      const passwordContains = validation[step] || [];

      let pwdStatus = true;

      if (
        passwordContains.includes('Lowercase') &&
        !/(?=.*[a-z])/.test(textValue)
      ) {
        errorMessage.push('LOWERCASE_FAILED');
        pwdStatus = false;
      }

      if (
        passwordContains.includes('Uppercase') &&
        !/(?=.*[A-Z])/.test(textValue)
      ) {
        errorMessage.push('UPPERCASE_FAILED');
        pwdStatus = false;
      }

      if (
        passwordContains.includes('Number') &&
        !/(?=.*\d)/.test(textValue)
      ) {
        errorMessage.push('NUMBER_FAILED');
        pwdStatus = false;
      }

      if (
        passwordContains.includes('Symbol') &&
        !/(?=.*\W)/.test(textValue)
      ) {
        errorMessage.push('SYMBOL_FAILED');
        pwdStatus = false;
      }

      if (pwdStatus) {
        validationSuccess.push(step);
      }
    }
  }

  return {
    validationSuccess,
    value,
    errorMessage,
  };
};
