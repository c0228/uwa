
export const FormSwitchValidate = (type, validation, value) => {

  const validationSteps = Object.keys(validation || {});

  const validationSuccess = [];
  let errorMessage = "";

  // Normalize value
  const selectedValues =
    type === "checkbox"
      ? (Array.isArray(value) ? value : [])
      : (value !== undefined && value !== null && value !== ""
          ? [value]
          : []);

  for (const step of validationSteps) {

    const validationConfig = validation[step];

    // Required Validation
    if (step === "required") {

      if (
        validationConfig?.value === true &&
        selectedValues.length === 0
      ) {
        errorMessage =
          validationConfig?.errorMessage ||
          "Please select an option";

        break;

      } else {
        validationSuccess.push(step);
      }
    }

    // Minimum Selection Validation (Checkbox only)
    else if (step === "minSelect" && type === "checkbox") {

      if (selectedValues.length < validationConfig?.value) {

        errorMessage =
          validationConfig?.errorMessage ||
          "Please select minimum " + validationConfig?.value + " options";

        break;

      } else {
        validationSuccess.push(step);
      }
    }

    // Maximum Selection Validation (Checkbox only)
    else if (step === "maxSelect" && type === "checkbox") {

      if (selectedValues.length > validationConfig?.value) {

        errorMessage =
          validationConfig?.errorMessage ||
          "You can select maximum " + validationConfig?.value + " options";

        break;

      } else {
        validationSuccess.push(step);
      }
    }

    // Custom Validation
    else if (step === "validate") {

      if (typeof validationConfig === "function") {

        const customResult = validationConfig(value);

        if (customResult === false) {
          errorMessage = "Invalid selection";
          break;
        }

        if (typeof customResult === "string" && customResult.length > 0) {
          errorMessage = customResult;
          break;
        }

        if (Array.isArray(customResult) && customResult.length > 0) {
          errorMessage = customResult.join(", ");
          break;
        }
      }

      validationSuccess.push(step);
    }

  }

  return {
    validationSuccess,
    value,
    errorMessage
  };
};
