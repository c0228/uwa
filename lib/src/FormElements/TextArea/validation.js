
import {
  toTextTransform,
  UrlAsyncFetch
} from 'e-ui-react';

export const FormInputValidate = async (validation, textBoxValue) => {

  let value = textBoxValue;

  // Apply Text Transformation
  if (validation?.onSubmit?.textTransform) {
    value = toTextTransform(
      value,
      validation.onSubmit.textTransform
    );
  }

  const validationSteps = Object.keys(validation || {});

  const validationSuccess = [];
  let errorMessage = '';

  const trimmedValue = value?.toString()?.trim() ?? '';

  for (const step of validationSteps) {

    const config = validation[step];

    // Skip Configuration Properties
    if (step === 'onSubmit' || step === 'deps') {
      continue;
    }

    // Required Validation
    if (step === 'required') {

      if (
        config?.value === true &&
        trimmedValue.length === 0
      ) {
        errorMessage =
          config?.errorMessage || 'This field is required';

        break;
      }

      validationSuccess.push(step);
    }

    // Minimum Length Validation
    else if (step === 'minLength') {

      if (trimmedValue.length < config?.value) {

        errorMessage =
          config?.errorMessage || 'Minimum length is ' + config?.value;

        break;
      }

      validationSuccess.push(step);
    }

    // Maximum Length Validation
    else if (step === 'maxLength') {

      if (trimmedValue.length > config?.value) {

        errorMessage =
          config?.errorMessage || 'Maximum length is ' + config?.value;

        break;
      }

      validationSuccess.push(step);
    }

    // Pattern Validation
    else if (step === 'pattern') {

      const pattern = config?.value;

      if (pattern instanceof RegExp) {
        pattern.lastIndex = 0;

        if (!pattern.test(value)) {
          errorMessage =
            config?.errorMessage || 'Invalid format';

          break;
        }
      }

      validationSuccess.push(step);
    }

    // Custom Validation
    else if (step === 'validate') {

      if (typeof config === 'function') {

        const customResult = await config(value);

        if (customResult === false) {
          errorMessage = 'Invalid value';
          break;
        }

        if (
          typeof customResult === 'string' &&
          customResult.length > 0
        ) {
          errorMessage = customResult;
          break;
        }

        if (
          Array.isArray(customResult) &&
          customResult.length > 0
        ) {
          errorMessage = customResult.join(', ');
          break;
        }
      }

      validationSuccess.push(step);
    }

    // Email Validation
    else if (step === 'email') {

      if (config?.formatCheck) {

        const validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!validRegex.test(trimmedValue)) {

          errorMessage =
            config?.errorMessage ||
            'Please Enter a Valid Email Address';

          break;
        }
      }

      // Check whether Email already exists
      const isEmailExist = config?.isEmailExist;

      if (isEmailExist !== undefined) {

        const url = isEmailExist?.url;
        const method = isEmailExist?.method;
        const expectedResponse = isEmailExist?.value;

        if (
          url !== undefined &&
          method !== undefined &&
          expectedResponse !== undefined
        ) {

          const data = await UrlAsyncFetch(
            url,
            method,
            { email: value }
          );

          if (
            typeof data !== 'string' ||
            data.trim() !== expectedResponse.trim()
          ) {

            errorMessage =
              isEmailExist?.errorMessage ||
              'Email already exists';

            break;
          }
        }
      }

      validationSuccess.push(step);
    }

    // Unknown validation steps
    else {
      validationSuccess.push(step);
    }
  }

  return {
    validationSuccess,
    value,
    errorMessage
  };
};
