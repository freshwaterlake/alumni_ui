import { useRef } from 'react';
import { SimpleFormControlArguments } from '../Core/SmartTypes';
import SelectControl from './SelectControl';

const YearAndMonthSelector = (args: SimpleFormControlArguments) => {
    const { control, dataKey, parentDataKey } = { ...args };
    const formControlRef = useRef(null); // Note: For providing reference to ErrorControl

    return (
        <>
            <label htmlFor={control.id} className='form-label'>
                {`${control.props.label} ${control.props.required ? '*' : ''}`}
            </label>
            <div className='row'>
                <div className='col-6'>
                    <SelectControl
                        key={control.controlGroup[0].id}
                        control={control.controlGroup[0]}
                        dataKey={dataKey + control.controlGroup[0].id}
                        parentDataKey={parentDataKey}
                    />
                </div>
                <div className='col-6'>
                    <SelectControl
                        key={control.controlGroup[1].id}
                        control={control.controlGroup[1]}
                        dataKey={dataKey + control.controlGroup[1].id}
                        parentDataKey={parentDataKey}
                    />
                </div>
            </div>
        </>
    );
};

export default YearAndMonthSelector;
