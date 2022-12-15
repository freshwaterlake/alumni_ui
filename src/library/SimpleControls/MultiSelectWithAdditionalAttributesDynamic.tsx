import { useContext, useState } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import {
    getControlValueFromState,
    getDataStructureFromControls,
    getFieldValuesConcatenatedFromRecord,
    range,
} from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const MultiSelectWithAdditionalInputsDynamic = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const [localState, setLocalState] = useState(getDataStructureFromControls(control.controlGroup));

    const data = getControlValueFromState(dataKey, state as State) as any[];

    const allColumnNamesExceptLastControl = range(0, control.controlGroup.length - 1)
        .map((index) => control.controlGroup[index].id)
        .join(',');

    const handleLocalStateUpdate = (id: string, value: any, dataKey: string) => {
        setLocalState({ ...localState, [id]: value });
    };

    const handleItemAdd = (id: string, value: any, dataKey: string) => {
        const record = { ...localState, [id]: value };
        setLocalState(record);
        dispatch({ type: 'ADD_NEW_RECORD_IN_ARRAY', payload: { dataKey, value: record } });
    };

    return (
        <>
            {control.props.label && (
                <label htmlFor={control.id} className='form-label'>
                    {`${control.props.label} ${control.props.required ? '*' : ''}`}
                </label>
            )}

            <div className='d-flex flex-wrap'>
                {range(0, control.controlGroup.length - 1).map((index) => {
                    if (index === control.controlGroup.length - 3)
                        return getControlFromFactory(control.controlGroup[index], dataKey, dataKey, handleLocalStateUpdate);

                    if (index === control.controlGroup.length - 2)
                        return getControlFromFactory(control.controlGroup[index], dataKey, dataKey, handleItemAdd);
                })}
            </div>

            {data &&
                data.map((row, index) => (
                    <div key={`${dataKey}-${index}`} className='p-2'>
                        <div className='d-grid bg-light border d-flex'>
                            {/* {getControlFromFactory(control.controlGroup[0], dataKey, dataKey + `.${index}.` + control.controlGroup[0].id)} */}
                            <label className='col-md-4 p-2'>
                                {getFieldValuesConcatenatedFromRecord(
                                    row,
                                    control.controlGroup,
                                    allColumnNamesExceptLastControl,
                                    state?.domain
                                )}
                            </label>
                            <div className='col-md-8'>
                                {getControlFromFactory(
                                    control.controlGroup[control.controlGroup.length - 1],
                                    dataKey,
                                    dataKey + `.${index}.` + control.controlGroup[control.controlGroup.length - 1].id,
                                    handleItemAdd
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default MultiSelectWithAdditionalInputsDynamic;
