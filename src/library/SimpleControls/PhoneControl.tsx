import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const PhoneControl = (props: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);

    const phoneCountryCodeValue = getControlValueFromState(
        props.parentDataKey + '.' + props.control.controlGroup[0]['id'],
        state as State
    ) as string;

    const phoneNumberValue = getControlValueFromState(
        props.parentDataKey + '.' + props.control.controlGroup[1]['id'],
        state as State
    ) as string;

    return (
        <div>
            <label htmlFor={props.control.id} className="form-label m-0 mb-1 font-16 font-500 w-100">
                {`${props.control.props.label} ${props.control.props.required ? '*' : ''}`}
            </label>

            <div className="input-group mb-3">
                <div className="col-4 pe-2">
                    <select
                        id={props.control.controlGroup[0]['id']}
                        data-testid={props.control.controlGroup[0]['id']}
                        onChange={(event) =>
                            handleControlValueChange(
                                props.control.controlGroup[0],
                                event.target.value,
                                props.parentDataKey + props.control.controlGroup[0]['id'],
                                state as State,
                                dispatch
                            )
                        }
                        className="form-select form-select-lg text-end"
                        aria-label="Default select example">
                        {state?.domain?.get(props.control.controlGroup[0].props.domainCategoryCode)?.map((domain: DomainElement) => (
                            <option key={domain.code} value={domain.code} defaultValue={phoneCountryCodeValue}>
                                {domain.value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-8">
                    <input
                        id={props.control.controlGroup[1]['id']}
                        data-testid={props.control.controlGroup[1]['id']}
                        type="text"
                        value={phoneNumberValue}
                        onChange={(event) =>
                            handleControlValueChange(
                                props.control.controlGroup[1],
                                event.target.value,
                                props.parentDataKey + props.control.controlGroup[1]['id'],
                                state as State,
                                dispatch
                            )
                        }
                        className="form-control form-control-lg"
                        placeholder={props.control.controlGroup[1].props.placeholder}
                        aria-label={props.control.controlGroup[1].props.placeholder}
                        aria-describedby="basic-addon1"
                    />
                </div>
            </div>
        </div>
    );
};

export default PhoneControl;
