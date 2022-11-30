import { useContext } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const MultiSelectWithAdditionalInputs = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State) as any[];

    return (
        <div>
            <label htmlFor='WhColNme' className='form-label'>
                Which other College/University did you apply? *
            </label>
            <div className='input-group mb-3'>
                <span className='input-group-text'>
                    <i className='bi bi-check-circle-fill text-success fs-4'></i>
                </span>
                <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Username'
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                />
            </div>
            {data &&
                data.map((row, index) => (
                    <div key={`${dataKey}-${index}`} className='card mb-3'>
                        <div className='card-body bg-light'>
                            <div className='d-flex flex-wrap'>
                                {control.controlGroup.map((subControl) =>
                                    getControlFromFactory(subControl, dataKey, dataKey + `.${index}.` + subControl.id)
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MultiSelectWithAdditionalInputs;
