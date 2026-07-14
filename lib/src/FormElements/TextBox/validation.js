
// TextBox Validation
export const ElementValidation = (validation = {}, elementValue = "") => {
    const validationSuccess = [];
    let value = elementValue ?? "";
    let errorMessage = "";

    // -------------------------
    // Text Transform
    // -------------------------
    if (validation?.onSubmit?.textTransform) {
        switch (validation.onSubmit.textTransform) {
            case "UPPER_CASE":
                value = value.toUpperCase();
                break;
            case "LOWER_CASE":
                value = value.toLowerCase();
                break;
            case "SENTENCE_CASE":
                value = value
                    .toLowerCase()
                    .replace(/\b\w/g, char => char.toUpperCase());
                break;
            default:
                break;
        }
    }

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