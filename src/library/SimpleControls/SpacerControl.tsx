import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { SimpleFormControlArguments } from '../Core/SmartTypes';

const SpacerControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    return <div className={`${control.className}`}></div>;
};

export default SpacerControl;
