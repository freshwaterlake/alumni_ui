import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const TextAsLabelControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State);

    return (
        <div>
            {control.props.label && (
                <label htmlFor={control.id} className='form-label'>
                    {`${control.props.label} ${control.props.required ? '*' : ''}`}
                </label>
            )}
            <label htmlFor={control.id} className='form-label'>
                {data}
            </label>
        </div>
    );
};

export default TextAsLabelControl;
