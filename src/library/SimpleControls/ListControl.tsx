import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { handleControlValueChange } from '../Core/SmartFunctions';
import { DomainElement, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const ListControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey, parentDataKey, handleChangeEvent } = { ...args };

    return (
        <div>
            <ul className="list-group">
                {state?.domain?.get(control.props.domainCategoryCode)?.map((element: DomainElement) => (
                    <li key={element.code} className="list-group-item">
                        <input
                            className="form-check-input me-1"
                            type="checkbox"
                            value={element.value}
                            id={element.code}
                            onChange={(event) =>
                                handleChangeEvent
                                    ? handleChangeEvent(control.id, event.target.value, dataKey)
                                    : handleControlValueChange(control, event.target.value, dataKey, state as State, dispatch)
                            }
                        />
                        <label className="form-check-label" htmlFor="firstCheckbox">
                            {element.value}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListControl;
