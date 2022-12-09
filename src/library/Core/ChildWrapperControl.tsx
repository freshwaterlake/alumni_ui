import { useContext } from 'react';
import { SmartContext } from './SmartContext';
import { ChildControlArguments } from './SmartTypes';

export const ChildWrapperControl = (props: ChildControlArguments) => {
    const { state } = useContext(SmartContext);
    const child = state?.customControls && state?.customControls[props.type];
    return <>{child && child(props)}</>;
};
