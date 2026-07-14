const validate_textTransform = (validation, result) =>{
 // -------------------------
 // Text Transform
 // -------------------------
 let value = result?.value;
 if (value === null || value === undefined) return "";
 const transform = validation?.onSubmit?.textTransform;
 switch(transform) {
    case "UPPER_CASE":
        value = String(value).toUpperCase();
    case "LOWER_CASE":
        value = String(value).toLowerCase();
    case "SENTENCE_CASE":
        value = String(value).toLowerCase()
                .replace(/\b\w/g, char => char.toUpperCase());
 }
 return {...result, value };
};

// TextBox Validation
export const ElementValidation = (validation = {}, elementValue = "") => {
    let result = { validationSuccess = [], errorMessage = "", value = elementValue ?? "" };

    // Text Transform
    result = validate_textTransform(validation, result);
    // -------------------------
    // Required
    // -------------------------
    if (validation?.required?.value) {
        if (String(value).trim() === "") {
            errorMessage = validation.required.errorMessage || "This field is required.";
            return { validationSuccess, value, errorMessage };
        }
        validationSuccess.push("required");
    }

    // -------------------------
    // Min Length
    // -------------------------
    if (validation?.minLength) {
        if (String(value).length < validation.minLength.value) {
            errorMessage =
                validation.minLength.errorMessage ||
                `Minimum ${validation.minLength.value} characters required.`;

            return { validationSuccess, value, errorMessage };
        }
        validationSuccess.push("minLength");
    }

    // -------------------------
    // Max Length
    // -------------------------
    if (validation?.maxLength) {
        if (String(value).length > validation.maxLength.value) {
            errorMessage =
                validation.maxLength.errorMessage ||
                `Maximum ${validation.maxLength.value} characters allowed.`;

            return { validationSuccess, value, errorMessage };
        }
        validationSuccess.push("maxLength");
    }

    // -------------------------
    // Pattern
    // -------------------------
    if (validation?.pattern) {
        const regex = new RegExp(validation.pattern.value);
        if (!regex.test(value)) {
            errorMessage =
                validation.pattern.errorMessage || "Invalid format.";
            return { validationSuccess, value, errorMessage };
        }
        validationSuccess.push("pattern");
    }
    return { validationSuccess, value, errorMessage };
};