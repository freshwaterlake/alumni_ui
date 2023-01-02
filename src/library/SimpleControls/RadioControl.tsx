import { useContext, useRef } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';
import ErrorControl from './ErrorControl';

const RadioControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const data = getControlValueFromState(dataKey, state as State);
    const controlDomain = state?.domain?.get(control.props.domainCategoryCode) as DomainElement[];
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    // useEffect(() => {
    //     const errorMessages = validateFormField(control, data, state, control?.props?.label, dataKey);
    //     dispatch({ type: 'SET_FIELD_VALIDATION_ERRORS', payload: { [dataKey]: errorMessages } });
    // }, []);

    //const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(`${event.target.id} - ${event.target.value}`);

    return (
        <fieldset>
            {control.props.label && (
                <legend className="col-form-label m-0 mb-1 font-16 font-500 w-100">
                    {`${control.props.label} `} <span className="text-danger">{`${control.props.required ? '*' : ''}`}</span>
                </legend>
            )}
            <div className="form-check">
                <div className="row my-1 flex-column flex-md-row">
                    <div className="row">
                        <div className="d-flex flex-wrap align-items-start justify-content-start">
                            {controlDomain?.length > 0 &&
                                controlDomain.map((domain) => (
                                    <div key={domain.code} className={`${control.props.radioTextClassName} px-3`}>
                                        <input
                                            id={control.id}
                                            data-testid={control.id}
                                            className={`form-check-input rounded-circle p-1 m-1`}
                                            type="radio"
                                            name={dataKey} // Note: Name need to be different for each row so that selection does not span across the next line item
                                            value={domain.code}
                                            checked={data === domain.code}
                                            onChange={(event) =>
                                                handleControlValueChange(control, event.target.value, dataKey, state as State, dispatch)
                                            }
                                            ref={formControlRef}
                                        />
                                        <div className={`${control.props.radioTextClassName} blue d-flex flex-wrap mb-3 mb-md-0`}>
                                            <label className="form-check-label m-0 mb-1 font-16 font-500 w-100" htmlFor={control.id}>
                                                {domain.value}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            <ErrorControl errorMessages={state?.formValidationErrors[dataKey]} />
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default RadioControl;
