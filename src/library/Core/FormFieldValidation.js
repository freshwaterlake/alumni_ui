import { evaluateExpressionWithValue } from './SmartFunctions';

const checkForRequiredField = (controlConfig, data, state, dataKey, label, errorMessages) =>
    controlConfig?.required && (data === undefined || data.length === 0) ? errorMessages.push(`Please enter ${label}`) : errorMessages;

const checkForMinAndMaxLength = (controlConfig, data, state, dataKey, label, errorMessages) => {
    const violatingMinLength = controlConfig?.props?.minLength && data.length < controlConfig?.props?.minLength;
    const violatingMaxLength = controlConfig?.props?.maxLength && data.length > controlConfig?.props?.maxLength;

    if (violatingMinLength & !violatingMaxLength & (errorMessages.length === 0))
        errorMessages.push(`Please enter minimum ${controlConfig?.props?.minLength} characters for ${label}`);

    if (!violatingMinLength & violatingMaxLength & (errorMessages.length === 0))
        errorMessages.push(`Please enter less than ${controlConfig?.props?.maxLength} characters for ${label}`);

    if (violatingMinLength & violatingMaxLength & (errorMessages.length === 0))
        errorMessages.push(
            `Please enter between ${controlConfig?.props?.minLength} - ${controlConfig?.props?.maxLength} characters for ${label}`
        );

    return errorMessages;
};

const checkForMinAndMaxValue = (controlConfig, data, state, dataKey, label, errorMessages) => {};

const checkForRegExPattern = (controlConfig, data, state, dataKey, label, errorMessages) => {
    if (controlConfig.props.pattern !== undefined) {
        const regex = new RegExp(controlConfig.props.pattern);
        if (!regex.test(data)) errorMessages.push(`Please enter valid value for ${label}`);
    }
};

const checkCustomValidations = (controlConfig, data, state, dataKey, label, errorMessages) => {
    if (controlConfig?.customValidations === undefined) return;
    const customValidations = JSON.parse(controlConfig?.customValidations);
    customValidations.map((validation) => {
        if (!evaluateExpressionWithValue(validation.expression, data, state.data)) errorMessages.push(validation.message);
    });
    return errorMessages;
};

export const validateFormField = (controlConfig, data, state, label, dataKey) => {
    const errorMessages = [];
    const localData = data === undefined || data === null ? '' : data;
    checkForRequiredField(controlConfig, localData, state, dataKey, label, errorMessages);
    checkForMinAndMaxLength(controlConfig, localData, state, dataKey, label, errorMessages);
    checkForMinAndMaxValue(controlConfig, localData, state, dataKey, label, errorMessages);
    checkForRegExPattern(controlConfig, localData, state, dataKey, label, errorMessages);
    checkCustomValidations(controlConfig, localData, state, dataKey, label, errorMessages);
    return errorMessages;
};
