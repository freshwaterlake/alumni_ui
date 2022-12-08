import { useContext } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const MultiSelectWithAdditionalInputsTwo = (args: SimpleFormControlArguments) => {
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
                    <div key={`${dataKey}-${index}`} className='py-1'>
                        <div className='d-grid bg-light border d-flex'>
                            {getControlFromFactory(control.controlGroup[0], dataKey, dataKey + `.${index}.` + control.controlGroup[0].id)}
                            {getControlFromFactory(control.controlGroup[1], dataKey, dataKey + `.${index}.` + control.controlGroup[1].id)}
                        </div>
                    </div>
                ))}
        </>
    );
};

export default MultiSelectWithAdditionalInputsTwo;
