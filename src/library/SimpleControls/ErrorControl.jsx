import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';

const ErrorControl = ({ errorMessages }) => {
    const { state, dispatch } = useContext(SmartContext);
    // const { formControlRef, controlConfig, data, dataKey } = { ...props };

    // const errorMessages = [];
    // const label = controlConfig?.props?.label;

    // const checkForRequiredField = () =>
    //     controlConfig?.required && (data === undefined || data.length === 0) ? errorMessages.push(`Please enter ${label}`) : null;

    // const checkForMinAndMaxLength = () => {
    //     const violatingMinLength = controlConfig?.props?.minLength && formControlRef.current.value.length < controlConfig?.props?.minLength;
    //     const violatingMaxLength = controlConfig?.props?.maxLength && formControlRef.current.value.length > controlConfig?.props?.maxLength;

    //     if (violatingMinLength & !violatingMaxLength)
    //         errorMessages.push(`Please enter minimum ${controlConfig?.props?.minLength} characters for ${label}`);
    //     if (!violatingMinLength & violatingMaxLength)
    //         errorMessages.push(`Please enter less than ${controlConfig?.props?.maxLength} characters for ${label}`);
    //     if (violatingMinLength & violatingMaxLength)
    //         errorMessages.push(
    //             `Please enter between ${controlConfig?.props?.minLength} - ${controlConfig?.props?.maxLength} characters for ${label}`
    //         );
    // };

    // const checkForMinAndMaxValue = () => {};

    // const checkCustomValidations = () => {
    //     if (controlConfig?.customValidations === undefined) return;
    //     const customValidations = JSON.parse(controlConfig?.customValidations);
    //     customValidations.map((validation) => {
    //         if (!evaluateExpression(validation.expression, state.data)) errorMessages.push(validation.message);
    //     });
    // };

    // const validate = () => {
    //     checkForMinAndMaxLength();
    //     checkForMinAndMaxValue();
    //     checkForRequiredField();
    //     checkCustomValidations();
    //     return errorMessages;
    // };

    // useEffect(() => {
    //     validate();
    //     if (errorMessages.length > 0) dispatch({ type: 'SET_FIELD_VALIDATION_ERRORS', payload: { [dataKey]: errorMessages } });
    // }, []);

    // if (state.flags.showFormErrors === 0) return <></>;

    return (
        <>
            {state?.flags?.showFormErrors > 0 &&
                errorMessages &&
                errorMessages.map((message) => (
                    <div key={message} className="text-danger">
                        {message}
                    </div>
                ))}
        </>
    );
};

export default ErrorControl;
