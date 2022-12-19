import { useContext, useRef } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, getDomainValueForCode, handleControlValueChange } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const TextControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State);
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    const getTextControl = () => {
        return (
            <>
                <input
                    id={control.id}
                    data-testid={control.id}
                    type={control.type}
                    hidden={control.props.isCode}
                    className={`form-control flex-1`}
                    placeholder={control.props?.placeholder}
                    inputMode={control.props?.inputMode}
                    value={data}
                    required={control.props?.required}
                    onChange={(event) => handleControlValueChange(control.id, event.target.value, dataKey, dispatch)}
                    minLength={control.props?.minLength}
                    maxLength={control.props?.maxLength}
                    min={control.props?.min}
                    max={control.props?.max}
                    ref={formControlRef}
                />
                {control?.props?.isCode && (
                    <input
                        type={control.type}
                        className={`form-control form-control-lg`}
                        value={getDomainValueForCode(data as string, state?.domain?.get(control.props.domainCategoryCode) as any[])}
                        onChange={() => {}}
                    />
                )}
            </>
        );
    };

    return (
        <>
            {control.props?.label && (
                <label htmlFor={control.id} className='form-label'>
                    {`${control.props.label} ${control.props.required ? '*' : ''}`}
                </label>
            )}
            {control?.props?.icon && (
                <div className='input-group mb-3'>
                    <span className='input-group-text'>
                        <i className={control.props?.icon}></i>
                    </span>
                    {getTextControl()}
                </div>
            )}
            {!control.props?.icon && getTextControl()}
        </>
    );
};

export default TextControl;
