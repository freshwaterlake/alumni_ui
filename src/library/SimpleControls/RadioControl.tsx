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
            {control.props.label && <legend className='col-form-label'>{control.props.label}</legend>}
            <div className='form-check'>
                <div className='row my-1 flex-column flex-md-row'>
                    <div className='col-auto'>
                        <div className='row'>
                            {controlDomain.map((domain) => (
                                <div className='col-auto mb-2 mb-md-0' key={dataKey + domain.code}>
                                    <div className='d-flex flex-wrap align-items-start ps-md-4'>
                                        <input
                                            id={control.id}
                                            data-testid={control.id}
                                            className={`form-check-input rounded-circle p-1 m-1`}
                                            type='radio'
                                            name={dataKey} // Note: Name need to be different for each row so that selection does not span across the next line item
                                            value={domain.code}
                                            checked={data === domain.code}
                                            onChange={(event) =>
                                                handleControlValueChange(control.id, event.target.value, dataKey, dispatch)
                                            }
                                            ref={formControlRef}
                                        />
                                        <div className='col blue d-flex flex-wrap mb-3 mb-md-0'>
                                            <label className='form-check-label' htmlFor={control.id}>
                                                {domain.value}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default RadioControl;
