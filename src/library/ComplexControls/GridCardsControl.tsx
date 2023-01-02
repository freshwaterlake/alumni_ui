import { useContext } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { findTheRightDataKey, getControlValueFromState } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const GridCardsControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey, parentDataKey } = { ...args };
    const finalDataKey = findTheRightDataKey(control, dataKey, parentDataKey as string);
    const data = getControlValueFromState(finalDataKey as string, state as State) as any[];
    console.log(data);

    return <>{data.map((item) => getControlFromFactory(control.controlGroup[0], dataKey, dataKey + `.` + control.id, state as State))}</>;
};

export default GridCardsControl;
