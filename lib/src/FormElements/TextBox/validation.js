
/**
 * ============================================
 * STANDARD VALIDATION RESULT
 * ============================================
 *
 * All validation layers return the same structure:
 *
 * {
 *     value,
 *     validationSuccess,
 *     errorMessage,
 *     successMessage,
 *     responseId
 * }
 */

export const createValidationResult = ({
    value = "",
    validationSuccess = [],
    errorMessage = "",
    successMessage = "",
    responseId = null
} = {}) => ({

    value,

    validationSuccess,

    errorMessage,

    successMessage,

    responseId

});


/**
 * ============================================
 * REQUEST VALUE REPLACEMENT
 * ============================================
 *
 * Replace {{value}} placeholders recursively
 * in API request data.
 */

export const replaceRequestValue = (data, value) => {

    if (typeof data === "string") {

        return data.replace(
            /\{\{value\}\}/g,
            String(value ?? "")
        );
    }


    if (Array.isArray(data)) {

        return data.map(item =>
            replaceRequestValue(item, value)
        );
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
 * ============================================
 * RESPONSE ID EXTRACTION
 * ============================================
 *
 * Supports common API response structures.
 *
 * Examples:
 *
 * "USERNAME_AVAILABLE"
 *
 * { id: "USERNAME_AVAILABLE" }
 *
 * { responseId: "USERNAME_AVAILABLE" }
 *
 * { data: { id: "USERNAME_AVAILABLE" } }
 *
 * { result: { id: "USERNAME_AVAILABLE" } }
 */

export const getResponseId = (response) => {

    if (typeof response === "string") {

        return response;
    }


    return (

        response?.responseId ??

        response?.id ??

        response?.data?.responseId ??

        response?.data?.id ??

        response?.result?.responseId ??

        response?.result?.id ??

        null

    );

};


/**
 * ============================================
 * API MESSAGE RESOLVER
 * ============================================
 *
 * Find a configured message matching response ID.
 *
 * Configuration:
 *
 * returnMessages: [
 *     {
 *         id: "USERNAME_AVAILABLE",
 *         type: "success",
 *         message: "Username is available!"
 *     }
 * ]
 */

export const getApiMessage = (
    responseId,
    returnMessages = []
) => {

    if (
        responseId === null ||
        responseId === undefined
    ) {

        return null;
    }


    return returnMessages.find(item =>

        String(item.id) === String(responseId)

    ) ?? null;

};


/**
 * ============================================
 * CLIENT-SIDE ELEMENT VALIDATION
 * ============================================
 *
 * Supported:
 *
 * required
 * minLength
 * maxLength
 * pattern
 * textTransform
 * successMessage
 */

export const ElementValidation = (
    validation = {},
    elementValue = ""
) => {

    const validationSuccess = [];

    let value = elementValue ?? "";


    // ---------------------------------------
    // Text Transformation
    // ---------------------------------------

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
                    .replace(/\b\w/g, char =>
                        char.toUpperCase()
                    );

                break;


            default:

                break;
        }
    }


    // ---------------------------------------
    // Required Validation
    // ---------------------------------------

    if (validation?.required?.value) {

        if (String(value).trim() === "") {

            return createValidationResult({

                value,

                validationSuccess,

                errorMessage:
                    validation.required.errorMessage ||
                    "This field is required."

            });
        }

        validationSuccess.push("required");
    }


    // ---------------------------------------
    // Minimum Length Validation
    // ---------------------------------------

    if (validation?.minLength) {

        if (
            String(value).length <
            validation.minLength.value
        ) {

            return createValidationResult({

                value,

                validationSuccess,

                errorMessage:
                    validation.minLength.errorMessage ||
                    `Minimum ${validation.minLength.value} characters required.`

            });
        }

        validationSuccess.push("minLength");
    }


    // ---------------------------------------
    // Maximum Length Validation
    // ---------------------------------------

    if (validation?.maxLength) {

        if (
            String(value).length >
            validation.maxLength.value
        ) {

            return createValidationResult({

                value,

                validationSuccess,

                errorMessage:
                    validation.maxLength.errorMessage ||
                    `Maximum ${validation.maxLength.value} characters allowed.`

            });
        }

        validationSuccess.push("maxLength");
    }


    // ---------------------------------------
    // Pattern Validation
    // ---------------------------------------

    if (validation?.pattern) {

        try {

            const regex = new RegExp(
                validation.pattern.value
            );

            if (!regex.test(String(value))) {

                return createValidationResult({

                    value,

                    validationSuccess,

                    errorMessage:
                        validation.pattern.errorMessage ||
                        "Invalid format."

                });
            }

            validationSuccess.push("pattern");

        } catch (error) {

            console.error(
                "Invalid validation pattern:",
                error
            );

            return createValidationResult({

                value,

                validationSuccess,

                errorMessage: "Invalid validation configuration."

            });
        }
    }


    // ---------------------------------------
    // Successful Client Validation
    // ---------------------------------------

    return createValidationResult({

        value,

        validationSuccess,

        errorMessage: "",

        successMessage:
            validation?.successMessage ?? ""

    });

};


/**
 * ============================================
 * CUSTOM ONCHANGE RESULT RESOLVER
 * ============================================
 *
 * Supported callback responses:
 *
 * return "USERNAME_AVAILABLE";
 *
 * OR
 *
 * return {
 *     id: "USERNAME_AVAILABLE"
 * };
 *
 * OR
 *
 * return {
 *     responseId: "USERNAME_AVAILABLE"
 * };
 *
 * OR
 *
 * return {
 *     successMessage: "Username available!"
 * };
 *
 * OR
 *
 * return {
 *     errorMessage: "Username already exists."
 * };
 */

export const resolveOnChangeResult = (
    callbackResult,
    validationResult
) => {

    const result = createValidationResult(
        validationResult
    );


    // ---------------------------------------
    // String Response
    // ---------------------------------------

    if (typeof callbackResult === "string") {

        result.responseId = callbackResult;
    }


    // ---------------------------------------
    // Object Response
    // ---------------------------------------

    else if (
        callbackResult &&
        typeof callbackResult === "object"
    ) {

        result.responseId = getResponseId(
            callbackResult
        ) ?? result.responseId;


        result.errorMessage =
            callbackResult.errorMessage ??
            result.errorMessage;


        result.successMessage =
            callbackResult.successMessage ??
            result.successMessage;


        if (Array.isArray(callbackResult.validationSuccess)) {

            result.validationSuccess =
                callbackResult.validationSuccess;
        }


        if (callbackResult.value !== undefined) {

            result.value = callbackResult.value;
        }
    }


    // ---------------------------------------
    // Error Priority
    // ---------------------------------------

    if (result.errorMessage) {

        result.successMessage = "";
    }


    return result;

};


/**
 * ============================================
 * API VALIDATION RESULT RESOLVER
 * ============================================
 *
 * Automatically updates:
 *
 * successMessage
 * errorMessage
 * responseId
 *
 * API response messages are merged into
 * the existing client validation result.
 */

export const resolveApiValidationResult = (
    apiResult,
    validationResult
) => {

    const result = createValidationResult(
        validationResult
    );


    // Always preserve the API response ID,
    // even when no configured message matches.

    result.responseId =
        apiResult?.responseId ??
        result.responseId;


    const matchedMessage =
        apiResult?.matchedMessage;


    if (!matchedMessage) {

        return result;
    }


    // ---------------------------------------
    // Message Type
    // ---------------------------------------

    const type = String(
        matchedMessage.type ?? ""
    ).toLowerCase();


    // ---------------------------------------
    // Message Content
    // ---------------------------------------

    const message =

        matchedMessage.message ??

        matchedMessage.successMessage ??

        matchedMessage.errorMessage ??

        "";


    if (!message) {

        return result;
    }


    // ---------------------------------------
    // Success Response
    // ---------------------------------------

    if (type === "success") {

        result.successMessage = message;

        result.errorMessage = "";
    }


    // ---------------------------------------
    // Error Response
    // ---------------------------------------

    else if (type === "error") {

        result.errorMessage = message;

        result.successMessage = "";
    }


    return result;

};


/**
 * ============================================
 * API ELEMENT VALIDATION
 * ============================================
 *
 * fetcher:
 *
 * UrlAsyncFetch
 *
 * API configuration:
 *
 * {
 *     url,
 *     method,
 *     requestBody,
 *     returnMessages
 * }
 */

export const ApiElementValidation = async ({
    apiConfig = {},
    value = "",
    fetcher
}) => {


    // ---------------------------------------
    // Validate API Configuration
    // ---------------------------------------

    if (
        !apiConfig?.url ||
        !apiConfig?.method ||
        typeof fetcher !== "function"
    ) {

        return {

            response: null,

            responseId: null,

            matchedMessage: null

        };
    }


    // ---------------------------------------
    // Prepare Request Body
    // ---------------------------------------

    const requestBody = replaceRequestValue(

        apiConfig.requestBody ?? {},

        value

    );


    // ---------------------------------------
    // Execute API Request
    // ---------------------------------------

    const response = await fetcher(

        apiConfig.url,

        apiConfig.method,

        requestBody

    );


    // ---------------------------------------
    // Extract Response ID
    // ---------------------------------------

    const responseId = getResponseId(
        response
    );


    // ---------------------------------------
    // Match Configured Message
    // ---------------------------------------

    const matchedMessage = getApiMessage(

        responseId,

        apiConfig.returnMessages ?? []

    );


    // ---------------------------------------
    // Return API Validation Result
    // ---------------------------------------

    return {

        response,

        responseId,

        matchedMessage

    };

};
