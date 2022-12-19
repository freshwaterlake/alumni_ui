import { useState } from 'react';

const MultiSelectInlineControl = () => {
    const [selectedOptions, setSelectedOptions] = useState([] as string[]);
    const [hideSelect, setHideSelect] = useState(false);

    const options: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    const handleSelect = (option: string) => {
        console.log(option);
        setSelectedOptions([...selectedOptions, option]);
        setHideSelect(true);
    };

    const handleShowSelect = () => {
        setHideSelect(false);
    };

    return (
        <div className='row'>
            <div className='form-control form-control-lg d-flex flex-wrap'>
                <button onClick={handleShowSelect} className='d-flex flex-wrap col-12'>
                    {selectedOptions.map((item) => (
                        <button key={item} className='btn btn-primary m-1'>
                            {item}{' '}
                        </button>
                    ))}
                </button>
                <div className='col-12'>
                    {!hideSelect && (
                        <select
                            className='form-select form-select-lg mb-3'
                            multiple
                            aria-label='.form-select-lg example'
                            onChange={(event) => handleSelect(event.target.value)}
                        >
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultiSelectInlineControl;
