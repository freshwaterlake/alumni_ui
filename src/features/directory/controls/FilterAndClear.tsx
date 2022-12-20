const FilterAndClear = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <button
                    className='btn-filter btn-unscroll mobileonly'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#filter_collapse'
                    aria-expanded='false'
                    aria-controls='filter_collapse'
                >
                    Filters
                </button>
                <h3 className='font-18 font-500 mb-2 mt-2'>
                    <span className='icon-filter'></span>Filters
                </h3>
            </div>
            <a href='javascript:;' className='font-14 font-500 text-burgandi text-decoration-underline'>
                Clear
            </a>
        </div>
    );
};

export default FilterAndClear;
