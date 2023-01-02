import { useContext, useEffect, useRef } from 'react';
import { validateFormField } from '../Core/FormFieldValidation';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';
import ErrorControl from './ErrorControl';

const SelectControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey, parentDataKey, handleChangeEvent } = { ...args };

    let data = getControlValueFromState(dataKey, state as State);
    if (Array.isArray(data)) data = undefined;

    const parentData = control.props.parentId
        ? getControlValueFromState(parentDataKey + '.' + control.props.parentId, state as State)
        : undefined;
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    const controlDomain = (state?.domain?.get(control.props.domainCategoryCode) as DomainElement[]).filter((domain: DomainElement) => {
        if (control.props.parentId === null || control.props.parentId === undefined || control.props.parentId.length === 0) return true;
        else return domain.parentCode === parentData;
    });

    useEffect(() => {
        const errorMessages = validateFormField(control, data, state, control?.props?.label, dataKey);
        dispatch({ type: 'SET_FIELD_VALIDATION_ERRORS', payload: { dataKey, errorMessages } });
    }, []);

    return (
        <>
            {control.props.label && (
                <label htmlFor={control.id} className="form-label m-0 mb-1 font-16 font-500 w-100">
                    {`${control.props.label} `} <span className="text-danger">{`${control.props.required ? '*' : ''}`}</span>
                </label>
            )}
            <select
                id={control.id}
                className={`form-select form-select-lg`}
                value={data}
                required={control.props.required}
                onChange={(event) =>
                    handleChangeEvent
                        ? handleChangeEvent(control.id, event.target.value, dataKey)
                        : handleControlValueChange(control, event.target.value, dataKey, state as State, dispatch)
                }
                ref={formControlRef}>
                {!controlDomain.some((domain) => domain.code === '') && <option value={''}>{'--Select--'}</option>}
                {controlDomain.map((domain) => (
                    <option key={domain.code} value={domain.code} defaultValue={data}>
                        {domain.value}
                    </option>
                ))}
            </select>
            <ErrorControl errorMessages={state?.formValidationErrors[dataKey]} />
        </>
    );
};

export default SelectControl;
