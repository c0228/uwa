
export const FormRangeValidate = (validation, value) => {

  const validationSteps = Object.keys(validation || {});

  const validationSuccess = [];
  let errorMessage = '';

  for (const validateStep of validationSteps) {

    const step = validation[validateStep];

    // Required Validation
    if (validateStep === 'required') {

      if (step?.value === true && (
        value === undefined ||
        value === null ||
        value === ''
      )) {
        errorMessage = step?.errorMessage || 'This field is required';
        break;
      } else {
        validationSuccess.push(validateStep);
      }
    }

    // Range Validation
    else if (validateStep === 'range') {

      const minValue = Number(step?.minValue);
      const maxValue = Number(step?.maxValue);

      if (value < minValue || value > maxValue) {
        errorMessage = step?.errorMessage || 'Invalid range value';
        break;
      } else {
        validationSuccess.push(validateStep);
      }
    }
  }

  return {
    validationSuccess,
    value,
    errorMessage
  };
};
