import React, {
  useState,
  useEffect,
  createContext as createFormContext,
  useContext as useForm
} from "react";

import { Button } from "e-ui-react";

const FormContext = createFormContext();

// Static Variables
export const FORM_SUBMITTED = "SUBMITTED";
export const FORM_RESET = "RESET";

export const getForm = () => useForm(FormContext);

export const Form = ({
  name,
  btnSubmit,
  btnReset,
  children,
  onChange,
  onSubmit,
  onReset
}) => {
  const [form, updateForm] = useState({});

  // Initialize the named form
  useEffect(() => {
    if (name) {
      updateForm((prev) => ({
        ...prev,
        [name]: prev[name] || {}
      }));
    }
  }, [name]);

  const setForm = (formName, data) => {
    updateForm((prev) => ({
      ...prev,
      [formName]: {
        ...(prev[formName] || {}),
        ...data
      }
    }));
  };

  // Register an optional callback to run after submission
  let afterSubmitted;

  const afterSubmit = (callback) => {
    afterSubmitted = callback;
  };

  const setFormMode = (status) => {
    if (name) {
      setForm(name, { mode: status });
    }
  };

  // Check whether the form contains validation errors
  // Check whether all form elements are valid
const isErrorMessageEmpty = (formData = {}) => {
  const errors = [];

  Object.keys(formData).forEach((key) => {

    // Skip form-level properties
    if (key === "mode") return;

    const field = formData[key];

    if (field?.errorMessage?.length > 0) {
      errors.push({
        name: key,
        errorMessage: field.errorMessage
      });
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
};

  // Submit form from either the default or a custom button
  const submitForm = async (event) => {
      event?.preventDefault();

      const currentForm = form[name] || {};

      // Trigger Form onChange callback.
      if (typeof onChange === "function") {
        await onChange(currentForm);
      }

      // Update form mode.
      setFormMode(FORM_SUBMITTED);

  const validationResult = isErrorMessageEmpty(currentForm);

  const isValid = validationResult.isValid;

  if (onSubmit) {
    await onSubmit(
      form,
      isValid,
      resetForm,
      validationResult.errors
    );
  }

  if (afterSubmitted) {
    await afterSubmitted();
  }
};

  // Reset form from either the default or a custom button
  const resetForm = () => {
    setFormMode(FORM_RESET);

    if (onReset) {
      onReset();
    }

    setTimeout(() => {
      setFormMode("INITIAL");
    }, 1000);
  };

  // Notify parent whenever form data changes
  useEffect(() => {
    if (onChange) {
      onChange(form);
    }
  }, [form]);

  return (
    <FormContext.Provider
      value={{
        name,
        form,
        setForm,
        submitForm,
        resetForm,
        afterSubmit
      }}
    >
      <form
        id={name}
        onSubmit={submitForm}
        onReset={(event) => {
          event.preventDefault();
          resetForm();
        }}
      >
        {children}

        <div
          align={btnSubmit?.align}
          style={{ paddingTop: "15px" }}
        >
          {btnSubmit && (
            <Button
              type="button"
              size={btnSubmit?.size}
              style={{ marginRight: "5px" }}
              onClick={submitForm}
            >
              {btnSubmit?.label}
            </Button>
          )}

          {btnReset && (
            <Button
              type="button"
              size={btnReset?.size}
              onClick={resetForm}
            >
              {btnReset?.label}
            </Button>
          )}
        </div>
      </form>
    </FormContext.Provider>
  );
};