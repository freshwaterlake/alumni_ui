import { SimpleFormControlArguments } from '../Core/SmartTypes';

const FiltersApplied = (args: SimpleFormControlArguments) => {
    return (
        <div>
            <div className='filterChecked d-flex flex-wrap mb-3 py-1 align-items-center' id='FilterDetails'>
                <label className='font-14 font-500 me-2'>Filters Applied </label>
                <span className='font-14 text-black selected height-32'>
                    2020(Your Batch)<i className='icon-invert-cross text-gray-98 ms-2'></i>
                </span>
                <span className='font-14 text-black selected height-32'>
                    1989<i className='icon-invert-cross text-gray-98 ms-2'></i>
                </span>
                <span className='font-14 text-black selected height-32'>
                    1991<i className='icon-invert-cross text-gray-98 ms-2'></i>
                </span>
            </div>
        </div>
    );
};

export default FiltersApplied;
