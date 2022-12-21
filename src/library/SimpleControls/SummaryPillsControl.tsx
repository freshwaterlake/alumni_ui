import { useContext, useState } from 'react';
import { SmartContext } from '../Core/SmartContext';
import { getControlValueFromState } from '../Core/SmartFunctions';
import { SimpleFormControlArguments, State } from '../Core/SmartTypes';

const SummaryPillsControl = (args: SimpleFormControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { control, dataKey } = { ...args };
    const [selectedPill, setSelectedPill] = useState(control.controlGroup[0].id);

    const data = getControlValueFromState(dataKey, state as State);

    const handleClick = (id: string) => {
        setSelectedPill(id);
        state?.actions[id]();
    };

    return (
        <div className='row job_internship_tab polartabsec'>
            <div className='xscroll p-0'>
                <ul className='nav nav-tabs' id='JobInternshipTab' role='tablist' data-aos='fade-left' data-aos-delay='600'>
                    {control.controlGroup.map((subControl) => (
                        <li key={subControl.id} className='nav-item' role='presentation' id='ActiveTab'>
                            <button
                                className={`nav-link ${selectedPill === subControl.id ? ' active ' : ''}`}
                                id={subControl.id}
                                data-bs-toggle='tab'
                                data-bs-target='#ActiveListings'
                                type='button'
                                role='tab'
                                aria-controls='ActiveListings'
                                aria-selected='true'
                                onClick={() => handleClick(subControl.id)}
                            >
                                {subControl.props.label} <span id='ActiveCount'>({data[subControl.id]})</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SummaryPillsControl;
