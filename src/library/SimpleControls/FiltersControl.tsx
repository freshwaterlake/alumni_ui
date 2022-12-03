const FiltersControl = () => {
    return (
        <div className='d-flex flex-column m-3'>
            <button
                className='btn btn-primary collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseExample'
                aria-expanded='false'
                aria-controls='collapseExample'
            >
                <span className='d-flex flex-wrap'>
                    <span className='col-11'>Countries</span>
                    <span className='bi bi-chevron-down col-1'></span>
                </span>
            </button>
            <div className='collapse' id='collapseExample'>
                <div className='card card-body'>
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                </div>
            </div>
        </div>
    );
};

export default FiltersControl;
