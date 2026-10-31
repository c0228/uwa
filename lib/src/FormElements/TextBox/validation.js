
/**
 * Replace {{value}} placeholders recursively in API request data.
 */
export const replaceRequestValue = (data, value) => {
    if (typeof data === "string") {
        return data.replace(/\{\{value\}\}/g, String(value ?? ""));
    }

    if (Array.isArray(data)) {
        return data.map(item => replaceRequestValue(item, value));
    }

    if (data && typeof data === "object") {
        return Object.fromEntries(
            Object.entries(data).map(([key, item]) => [
                key,
                replaceRequestValue(item, value)
            ])
        );
    }

    return data;
};


/**
 * Extract response ID from common API response structures.
 */
export const getResponseId = (response) => {
    return (
        response?.id ??
        response?.data?.id ??
        response?.result?.id ??
        null
    );
};


/**
 * Find the configured message matching the API response ID.
 */
export const getApiMessage = (responseId, returnMessages = []) => {
    if (!responseId) return null;

    return returnMessages.find(
        item => item.id === responseId
    ) ?? null;
};


/**
 * Client-side element validation.
 */
export const ElementValidation = (validation = {}, elementValue = "") => {
    const validationSuccess = [];
    let value = elementValue ?? "";

    // Text Transform
    if (validation?.onSubmit?.textTransform) {
        switch (validation.onSubmit.textTransform) {
            case "UPPER_CASE":
                value = String(value).toUpperCase();
                break;

            case "LOWER_CASE":
                value = String(value).toLowerCase();
                break;

            case "SENTENCE_CASE":
                value = String(value)
                    .toLowerCase()
                    .replace(/\b\w/g, char => char.toUpperCase());
                break;

            default:
                break;
        }
    }

    // Required
    if (validation?.required?.value) {
        if (String(value).trim() === "") {
            return {
                value,
                validationSuccess,
                errorMessage:
                    validation.required.errorMessage ||
                    "This field is required."
            };
        }

        validationSuccess.push("required");
    }

    // Min Length
    if (validation?.minLength) {
        if (String(value).length < validation.minLength.value) {
            return {
                value,
                validationSuccess,
                errorMessage:
                    validation.minLength.errorMessage ||
                    `Minimum ${validation.minLength.value} characters required.`
            };
        }

        validationSuccess.push("minLength");
    }

    // Max Length
    if (validation?.maxLength) {
        if (String(value).length > validation.maxLength.value) {
            return {
                value,
                validationSuccess,
                errorMessage:
                    validation.maxLength.errorMessage ||
                    `Maximum ${validation.maxLength.value} characters allowed.`
            };
        }

        validationSuccess.push("maxLength");
    }

    // Pattern
    if (validation?.pattern) {
        const regex = new RegExp(validation.pattern.value);

        if (!regex.test(String(value))) {
            return {
                value,
                validationSuccess,
                errorMessage:
                    validation.pattern.errorMessage || "Invalid format."
            };
        }

        validationSuccess.push("pattern");
    }

    return {
        value,
        validationSuccess,
        errorMessage: ""
    };
};


/**
 * API validation.
 *
 * fetcher should be UrlAsyncFetch (or another compatible request function).
 */
export const ApiElementValidation = async ({
    apiConfig = {},
    value = "",
    fetcher
}) => {
    if (
        !apiConfig?.url ||
        !apiConfig?.method ||
        typeof fetcher !== "function"
    ) {
        return {
            responseId: null,
            matchedMessage: null
        };
    }

    const requestBody = replaceRequestValue(
        apiConfig.requestBody ?? {},
        value
    );

    const response = await fetcher(
        apiConfig.url,
        apiConfig.method,
        requestBody
    );

    const responseId = getResponseId(response);

    const matchedMessage = getApiMessage(
        responseId,
        apiConfig.returnMessages ?? []
    );

    return {
        response,
        responseId,
        matchedMessage
    };
};
