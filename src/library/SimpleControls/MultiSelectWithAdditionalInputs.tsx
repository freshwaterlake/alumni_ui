import { useContext, useState } from 'react';
import { getControlFromFactory } from '../Core/ControlFactory';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState, getDataStructureFromControls } from '../Core/SmartFunctions';
import { DomainElement, ObjectWithKeys, SimpleFormControlArguments, State } from '../Core/SmartTypes';

const MultiSelectWithAdditionalInputs_1 = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };

    const [searchWord, setSearchWord] = useState('');
    const [listData, setListData] = useState([] as any[]);

    const data = getControlValueFromState(dataKey, state as State) as any[];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (searchWord.length <= 2) {
            setSearchWord(event.target.value);
            setListData([]);
            return;
        }

        setListData(
            state?.domain
                ?.get(control.props.domainCategoryCode)
                ?.filter((domainItem: DomainElement) => domainItem.value.match(searchWord)) as any[]
        );
    };

    const handleItemAdd = (code: string) => {
        let itemToAdd: ObjectWithKeys = getDataStructureFromControls(control.controlGroup);
        itemToAdd[control.controlGroup[0].id] = code;
        dispatch({ type: 'ADD_NEW_RECORD_IN_ARRAY', payload: { dataKey, value: itemToAdd } });
        setSearchWord('');
        setListData([]);
    };

    return (
        <div>
            <label htmlFor='WhColNme' className='form-label'>
                {control.props.label}
            </label>
            <div className='input-group'>
                <span className='input-group-text'>
                    <i className={control.props.icon}></i>
                </span>
                <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Username'
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                    value={searchWord}
                    onChange={handleChange}
                />
            </div>
            {listData && (
                <div className='dropdown overflow-auto mb-3'>
                    <ul className='list-group'>
                        {listData.map((item) => (
                            <button key={item.code} className='dropdown-item' onClick={() => handleItemAdd(item.code)}>
                                {item.value}
                            </button>
                        ))}
                    </ul>
                </div>
            )}
            {data &&
                data.map((row, index) => (
                    <div key={`${dataKey}-${index}`} className='card mb-3'>
                        <div className='card-body bg-light'>
                            <div className='d-flex flex-wrap'>
                                {control.controlGroup.map((subControl) =>
                                    getControlFromFactory(subControl, dataKey, dataKey + `.${index}.` + subControl.id)
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default MultiSelectWithAdditionalInputs_1;
