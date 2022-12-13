import { useContext, useRef } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const RadioControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State);
    const controlDomain = state?.domain?.get(control.props.domainCategoryCode) as DomainElement[];
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(`${event.target.id} - ${event.target.value}`);

    return (
        <fieldset>
            {control.props.label && <legend className='col-form-label col-sm-2 pt-0'>{control.props.label}</legend>}
            <div className='form-check'>
                <div className='d-flex flex-wrap '>
                    {controlDomain.map((domain) => (
                        <div className={control.props.radioTextClassName} key={dataKey + domain.code}>
                            <input
                                id={control.id}
                                data-testid={control.id}
                                className={`form-check-input`}
                                type='radio'
                                name={dataKey} // Note: Name need to be different for each row so that selection does not span across the next line item
                                value={domain.code}
                                checked={data === domain.code}
                                onChange={(event) => handleControlValueChange(control.id, event.target.value, dataKey, dispatch)}
                                ref={formControlRef}
                            />
                            <label className='form-check-label' htmlFor={control.id}>
                                {domain.value}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </fieldset>
    );
};

export default RadioControl;
