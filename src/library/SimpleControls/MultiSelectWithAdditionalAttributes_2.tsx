import { useContext } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const MultiSelectWithAdditionalInputs_2 = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const controlDomain = state?.domain?.get(control.props.domainCategoryCode) as DomainElement[];
    const data = getControlValueFromState(dataKey, state as State) as any[];

    return (
        <>
            {control.props.label && (
                <label htmlFor={control.id} className='form-label'>
                    {`${control.props.label} ${control.props.required ? '*' : ''}`}
                </label>
            )}
            <div className='mb-2'>
                <select
                    id={control.id}
                    className={`form-select form-select-lg`}
                    required={control.props.required}
                    onChange={(event) => handleControlValueChange(control.id, event.target.value, dataKey, dispatch)}
                >
                    {!controlDomain.some((domain) => domain.code === '') && <option value={''}>{'--Select--'}</option>}
                    {controlDomain.map((domain) => (
                        <option key={domain.code} value={domain.code}>
                            {domain.value}
                        </option>
                    ))}
                </select>
            </div>
            {data &&
                data.map((row, index) => (
                    <div key={`${dataKey}-${index}`} className='card mb-2'>
                        <div className='card-body bg-light'>
                            <div className='row'>
                                {getControlFromFactory(
                                    control.controlGroup[0],
                                    dataKey,
                                    dataKey + `.${index}.` + control.controlGroup[0].id
                                )}
                                {getControlFromFactory(
                                    control.controlGroup[1],
                                    dataKey,
                                    dataKey + `.${index}.` + control.controlGroup[1].id
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default MultiSelectWithAdditionalInputs_2;
