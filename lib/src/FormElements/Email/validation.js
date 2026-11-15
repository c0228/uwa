
import { toTextTransform, UrlAsyncFetch } from "e-ui-react";

export const FormInputValidate = async (validation, textBoxValue) => {

  let value = textBoxValue ?? '';

  if (validation?.onSubmit?.textTransform) {
    value = toTextTransform(
      value,
      validation.onSubmit.textTransform
    );
  }

  const validationSteps = Object.keys(validation || {});
  const validationSuccess = [];

  const getError = (step, fallback) =>
    validation[step]?.errorMessage || fallback;

  for (const step of validationSteps) {

    const config = validation[step];
    let errorMessage = '';

    // Skip dependency validation (reserved for future use)
    if (step === 'deps') {
      continue;
    }

    // Required validation
    if (step === 'required') {

      if (config?.value === true) {

        const isEmpty =
          value === null ||
          value === undefined ||
          value.toString().trim().length === 0;

        if (isEmpty) {
          errorMessage = getError(
            step,
            'This field is required.'
          );
        }
      }
    }

    // Minimum length
    else if (step === 'minLength') {

      if (
        value.toString().trim().length < config?.value
      ) {
        errorMessage = getError(
          step,
          'Minimum length not satisfied.'
        );
      }
    }

    // Maximum length
    else if (step === 'maxLength') {

      if (
        value.toString().trim().length > config?.value
      ) {
        errorMessage = getError(
          step,
          'Maximum length exceeded.'
        );
      }
    }

    // Pattern validation
    else if (step === 'pattern') {

      const regex = config?.value;

      if (regex instanceof RegExp) {
        regex.lastIndex = 0;

        if (!regex.test(value.toString())) {
          errorMessage = getError(
            step,
            'Invalid format.'
          );
        }
      }
    }

    // Custom validation
    else if (step === 'validate') {

      const customError = await config(value);

      if (customError) {
        errorMessage = customError;
      }
    }

    // Email validation
    else if (step === 'email') {

      if (config?.formatCheck && value.toString().trim()) {

        const validRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!validRegex.test(value.toString().trim())) {

          errorMessage = getError(
            step,
            'Please Enter a Valid Email Address'
          );

        } else if (config?.isEmailExist) {

          const isEmailExist = config.isEmailExist;

          const url = isEmailExist?.url;
          const method = isEmailExist?.method;
          const expectedValue = isEmailExist?.value;

          if (
            url &&
            method &&
            expectedValue !== undefined
          ) {

            try {

              const data = await UrlAsyncFetch(
                url,
                method,
                { email: value }
              );

              if (
                String(data ?? '').trim() !==
                String(expectedValue).trim()
              ) {
                errorMessage =
                  isEmailExist?.errorMessage ||
                  'Email address is already registered.';
              }

            } catch (error) {

              errorMessage =
                isEmailExist?.apiErrorMessage ||
                'Unable to verify email address. Please try again.';
            }
          }
        }
      }
    }

    // Stop when a validation fails
    if (errorMessage) {

      return {
        value,
        validationSuccess,
        errorMessage
      };
    }

    // Validation passed
    validationSuccess.push(step);
  }

  return {
    value,
    validationSuccess,
    errorMessage: ''
  };
};
