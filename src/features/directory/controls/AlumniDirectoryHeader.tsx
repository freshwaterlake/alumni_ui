import AlumniCountCards from './AlumniCountCards';

const AlumniDirectoryHeader = () => {
    return (
        <div className=' col-12 bg-red p-4'>
            <div className='row alumni-directory'>
                <div className='col-lg-12 d-flex flex-wrap align-items-center mb-3 pb-1'>
                    <h2
                        data-aos='fade-left'
                        data-aos-delay='300'
                        className='font-22 font-600 text-white mb-3 mb-sm-0 me-3 aos-init aos-animate'
                    >
                        Alumni Directory
                    </h2>
                    <div
                        className='d-flex align-items-center alumni-switch-container aos-init aos-animate'
                        data-aos='fade-right'
                        data-aos-delay='300'
                    >
                        <div className='d-flex flex-wrap switch'>
                            <a className='btn-myCampus shortlist font-16 font-500 d-flex justify-content-center align-items-center'>
                                My Campus
                            </a>
                            <a className='btn-allCampuses font-16 font-500 d-flex justify-content-center align-items-center active'>
                                All Campuses
                            </a>
                            <span className='bg'></span>
                        </div>
                    </div>
                </div>
            </div>
            <AlumniCountCards />
        </div>
    );
};

export default AlumniDirectoryHeader;
