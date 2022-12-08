import { useContext } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { DomainElement, SimpleFormControlArguments } from '../Core/SmartTypes';

const ListControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };

    return (
        <div>
            <ul className='list-group'>
                {state?.domain?.get(control.props.domainCategoryCode)?.map((element: DomainElement) => (
                    <li key={element.code} className='list-group-item'>
                        <input className='form-check-input me-1' type='checkbox' value='' id={element.code} />
                        <label className='form-check-label' htmlFor='firstCheckbox'>
                            {element.value}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListControl;
