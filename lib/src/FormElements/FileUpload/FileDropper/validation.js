
export const FormFileValidate = async (validation, value) => {
  const validationSteps = Object.keys(validation || {});
  const validationSuccess = [];
  let errMessage = '';

  for (const validateStep of validationSteps) {
    const step = validation[validateStep];

    if (validateStep === 'required') {
      const hasValue = Array.isArray(value)
        ? value.length > 0
        : value !== undefined && value !== null && value !== '';

      if (step?.value === true && !hasValue) {
        errMessage = step.errorMessage;
        break;
      }

      validationSuccess.push(validateStep);
    }
  }

  return {
    validationSuccess,
    value,
    errorMessage: errMessage,
  };
};
