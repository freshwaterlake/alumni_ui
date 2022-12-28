import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';

const ErrorControl = (props) => {
    const { state } = useContext(SmartContext);
    const { formControlRef, controlConfig } = { ...props };

    const errorMessages = [];
    const label = controlConfig?.props?.label;

    const checkForRequiredField = () =>
        controlConfig?.props?.required && errorMessages.length === 0 && formControlRef.current.value
            ? errorMessages.push(`Please enter ${label}`)
            : null;

    const checkForMinAndMaxLength = () => {
        const violatingMinLength = controlConfig?.props?.minLength && formControlRef.current.value.length < controlConfig?.props?.minLength;
        const violatingMaxLength = controlConfig?.props?.maxLength && formControlRef.current.value.length > controlConfig?.props?.maxLength;

        if (violatingMinLength & !violatingMaxLength)
            errorMessages.push(`Please enter minimum ${controlConfig?.props?.minLength} characters for ${label}`);
        if (!violatingMinLength & violatingMaxLength)
            errorMessages.push(`Please enter less than ${controlConfig?.props?.maxLength} characters for ${label}`);
        if (violatingMinLength & violatingMaxLength)
            errorMessages.push(
                `Please enter between ${controlConfig?.props?.minLength} - ${controlConfig?.props?.maxLength} characters for ${label}`
            );
    };

    const checkForMinAndMaxValue = () => {};

    const validate = () => {
        checkForMinAndMaxLength();
        checkForMinAndMaxValue();
        checkForRequiredField();
        return errorMessages;
    };

    // useEffect(() => {
    //     validate();
    // }, [state?.flags?.showFormErrors]);

    if (state.flags.showFormErrors === 0) return <></>;

    // return state.flags.showFormErrors && validate().length > 0 ? <div className="text-bg-danger">{errorMessages.concat()}</div> : <></>;
    return <>{state?.flags?.showFormErrors > 0 && validate().length > 0 && <div className="text-danger">{errorMessages.concat()}</div>}</>;
};

export default ErrorControl;
