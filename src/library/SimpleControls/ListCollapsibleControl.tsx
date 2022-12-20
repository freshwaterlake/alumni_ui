const ListCollapsibleControl = () => {
    return (
        <div>
            <div className='fiterItem mb-3' data-aos='fade-right'>
                <div className='filterHeader'>
                    <div className='d-flex justify-content-between align-items-center position-relative'>
                        <button
                            className='btn-nostyle text-start flex-1 d-flex justify-content-between align-items-center collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#FieldofStudy'
                            aria-expanded='false'
                            aria-controls='FieldofStudy'
                        >
                            <span className='font-18 font-600'>Career/Field of Study</span>
                            <span className='toggle'></span>
                        </button>
                    </div>
                </div>
                <div className='collapse mt-2' id='FieldofStudy'>
                    <div className='form-check' style={{ display: 'flex !important' }}>
                        <input className='form-check-input me-2' type='checkbox' name='Status_SelectAll' id='Status_SelectAll' value='1' />
                        <label className='form-check-label font-16 font-400 flex-1 ps-1 pt-1' htmlFor='Status_SelectAll'>
                            Select All
                        </label>
                        <div className='scrollMe'>
                            <div className='form-check'>
                                <input
                                    className='form-check-input me-2 Status_Class'
                                    type='checkbox'
                                    value="'+field.current_status_id+'"
                                    name='Status_Name'
                                />
                                <label className='form-check-label font-16 font-400 flex-1 ps-1 pt-1' htmlFor="'+field.current_status+'">
                                    '+field.current_status+'
                                </label>
                            </div>
                        </div>
                    </div>
                    ';
                </div>
            </div>
        </div>
    );
};

export default ListCollapsibleControl;
