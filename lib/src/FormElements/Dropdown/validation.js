
import { toTextTransform, UrlAsyncFetch } from "e-ui-react";

export const FormInputValidate = async (validation, textBoxValue) => {
  let value = textBoxValue;

  if (validation?.onSubmit?.textTransform) {
    value = toTextTransform(value, validation.onSubmit.textTransform);
  }

  const validationSteps = Object.keys(validation || {});
  const validationSuccess = [];

  let result = {
    value,
    validationSuccess: [],
    errorMessage: ''
  };

  for (const step of validationSteps) {
    const config = validation[step];
    let errorMessage = '';

    // Required validation
    if (step === 'required' && config?.value === true) {
      const isEmpty =
        value === undefined ||
        value === null ||
        (Array.isArray(value) && value.length === 0) ||
        value.toString().trim().length === 0;

      if (isEmpty) {
        errorMessage = config.errorMessage || 'This field is required.';
      }
    }

    // Minimum length
    else if (step === 'minLength') {
      if (value?.toString()?.trim().length < config.value) {
        errorMessage = config.errorMessage || 'Minimum length not satisfied.';
      }
    }

    // Maximum length
    else if (step === 'maxLength') {
      if (value?.toString()?.trim().length > config.value) {
        errorMessage = config.errorMessage || 'Maximum length exceeded.';
      }
    }

    // Pattern validation
    else if (step === 'pattern') {
      if (!config.value.test(value)) {
        errorMessage = config.errorMessage || 'Invalid format.';
      }
    }

    // Custom validation
    else if (step === 'validate') {
      errorMessage = config(value) || '';
    }

    // Email validation
    else if (step === 'email' && config?.formatCheck) {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!validRegex.test(value || '')) {
        errorMessage = 'Please Enter a Valid Email Address';
      } else if (config?.isEmailExist) {
        const { url, method, value: expectedValue, errorMessage: apiError } =
          config.isEmailExist;

        if (url && method && expectedValue !== undefined) {
          const data = await UrlAsyncFetch(url, method, { email: value });

          if (data?.trim() !== expectedValue.trim()) {
            errorMessage = apiError || 'Email already exists.';
          }
        }
      }
    }

    // Stop at first validation error
    if (errorMessage) {
      return {
        value,
        validationSuccess,
        errorMessage
      };
    }

    validationSuccess.push(step);

    result = {
      value,
      validationSuccess,
      errorMessage: ''
    };
  }

  return result;
};
