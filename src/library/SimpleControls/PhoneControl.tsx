import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const PhoneControl = (props: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const phoneCountryCodeValue = getControlValueFromState(props.dataKey + props.control.fields[0], state as State) as string;
    const phoneNumberValue = getControlValueFromState(props.dataKey + props.control.fields[1], state as State) as string;

    return (
        <div>
            <label htmlFor={props.control.id} className='form-label'>
                {`${props.control.props.label} ${props.control.props.required ? '*' : ''}`}
            </label>

            <div className='input-group mb-3'>
                <div className='col-5'>
                    <select
                        id={props.control.fields[0]}
                        data-testid={props.control.fields[0]}
                        onChange={(event) =>
                            handleControlValueChange(
                                props.control.fields[0],
                                event.target.value,
                                props.dataKey + props.control.fields[0],
                                dispatch
                            )
                        }
                        className='form-select form-select-lg text-end'
                        aria-label='Default select example'
                    >
                        {state?.domain?.get(props.control.props.domainCategoryCode)?.map((domain: DomainElement) => (
                            <option key={domain.code} value={domain.code} defaultValue={phoneCountryCodeValue}>
                                {domain.value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-7'>
                    <input
                        id={props.control.fields[1]}
                        data-testid={props.control.fields[1]}
                        type='text'
                        value={phoneNumberValue}
                        onChange={(event) =>
                            handleControlValueChange(
                                props.control.fields[1],
                                event.target.value,
                                props.dataKey + props.control.fields[1],
                                dispatch
                            )
                        }
                        className='form-control form-control-lg'
                        placeholder='Username'
                        aria-label='Username'
                        aria-describedby='basic-addon1'
                    />
                </div>
            </div>
        </div>
    );
};

export default PhoneControl;
