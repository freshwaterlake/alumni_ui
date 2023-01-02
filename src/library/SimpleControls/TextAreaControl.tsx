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
            <label htmlFor={control.id} className="form-label m-0 mb-1 font-16 font-500 w-100">
                {`${control.props.label} ${control.props.required ? '*' : ''}`}
            </label>
            <textarea
                id={control.id}
                data-testid={control.id}
                className="form-control"
                placeholder={control.props.placeholder}
                value={data}
                required={control.props.required}
                onChange={(event) => handleControlValueChange(control, event.target.value, dataKey, state as State, dispatch)}
                style={{ height: `${control.props.numLines * 50}px` }}></textarea>
            <label htmlFor={control.id}>Comments</label>
        </>
    );
};

export default TextAreaControl;
