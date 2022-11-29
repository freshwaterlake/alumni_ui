import { useContext, useRef } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const TextControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State);
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    return (
        <>
            <label htmlFor={control.id} className='form-label'>
                {`${control.props.label} ${control.props.required ? '*' : ''}`}
            </label>
            <input
                id={control.id}
                data-testid={control.id}
                type={control.type}
                className={`form-control form-control-lg`}
                placeholder={control.props.placeholder}
                inputMode={control.props.inputMode}
                value={data}
                required={control.props.required}
                onChange={(event) => handleControlValueChange(control.id, event.target.value, dataKey, dispatch)}
                minLength={control.props.minLength}
                maxLength={control.props.maxLength}
                min={control.props.min}
                max={control.props.max}
                ref={formControlRef}
            />
        </>
    );
};

export default TextControl;
