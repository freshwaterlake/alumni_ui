import { useContext, useRef } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const TextAreaControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State);
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    return (
        <>
            <label htmlFor={control.id} className='form-label'>
                {`${control.props.label} ${control.props.required ? '*' : ''}`}
            </label>
            <textarea
                id={control.id}
                data-testid={control.id}
                className='form-control'
                placeholder={control.props.placeholder}
                value={data}
                required={control.props.required}
                onChange={(event) => handleControlValueChange(control.id, event.target.value, dataKey, dispatch)}
                style={{ height: `${control.props.numLines * 50}px` }}
            ></textarea>
            <label htmlFor={control.id}>Comments</label>
        </>
    );
};

export default TextAreaControl;
