import { useContext, useEffect } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const FiltersControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey, parentDataKey } = { ...args };

    useEffect(() => {
        state?.actions['search'](state.data.searchCriteria);
    }, [state?.data.searchCriteria]);

    const handleSearchCriteriaAddition = (id: string, value: any, dataKey: string) => {
        dispatch({ type: 'ADD_NEW_RECORD_IN_ARRAY', payload: { dataKey, value } });
    };

    return (
        <>
            {control.controlGroup.map((subControl) => (
                <div key={subControl.id} className="d-flex flex-column m-1">
                    <button
                        className="btn btn-light collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${subControl.id}`}
                        aria-expanded="false"
                        aria-controls={`${subControl.id}`}>
                        <span className="d-flex flex-wrap">
                            <span className="col-11">{subControl.props.label}</span>
                            <span className="bi bi-chevron-down col-1"></span>
                        </span>
                    </button>
                    <div className="collapse" id={`${subControl.id}`}>
                        <div className="card card-body">
                            {getControlFromFactory(
                                subControl,
                                parentDataKey as string,
                                parentDataKey + `.` + subControl.id,
                                state as State,
                                handleSearchCriteriaAddition
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FiltersControl;
