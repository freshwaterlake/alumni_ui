import { SimpleFormControlArguments } from '../Core/SmartTypes';

const JobCardControl = (args: SimpleFormControlArguments) => {
    return (
        <div>
            <div className='act_lst mb-3 position-relative'>
                <span className='list_badge font-14 font-500'>Part-time</span>
                <div className='row m-0 d-flex flex-wrap justify-content-between align-items-end postedrow'>
                    <div className='flex-1 ps-0'>
                        <h4 className='font-20 font-500 mb-2'>QA @ Univariety</h4>
                        <div className='d-flex flex-wrap exp_loc'>
                            <a href='javascript:;' className='btn btnicon btn-icon-bg'>
                                <span className='icon-brife-case font-12 text-dark-blue icon'></span>
                                <span> 1 - 2 Year Experience</span>
                            </a>
                            <a href='javascript:;' className='btn btnicon btn-icon-bg'>
                                <span className='icon-location-pin font-14 text-dark-blue icon'></span>
                                <span>Hyderabad</span>
                            </a>
                            <a href='javascript:;' className='btn btnicon btn-icon-bg'>
                                <img src='https://miles.univariety.com/alumni/public/images/file_icon.png' />
                                <span>View Job Description</span>
                            </a>
                        </div>
                    </div>
                    <div className='px-0 text-end'>
                        <p className='font-14 font-500 text-dark-blue mb-0 mb-sm-3 postedtxt'>Posted 10 days ago</p>
                    </div>
                </div>
                <div className='row m-0 d-flex flex-wrap justify-content-between align-items-end'>
                    <div className='flex-1 ps-0'>
                        <a href='javascript:;' className='d-flex align-items-start person_detls text-decoration-none'>
                            <img
                                src='https://miles.univariety.com/alumni/public/images/dummy_male.svg'
                                className='rounded-circle me-2'
                                width='40'
                                height='40'
                            />
                            <div className='lstperdetails text-black'>
                                <p className='m-0 font-14 font-500 line-height-18'>
                                    <span className='font-16'>Ataul Baseer</span>, <em>Class of 2010</em>
                                </p>
                                <p className='m-0 font-14 font-500 line-height-18'>
                                    <em>Working As Sr. Manager At Univariety</em>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className='pe-0 text-end'>
                        <div className='d-flex flex-wrap justify-content-end'>
                            <a href='javascript:;' className='btn btnicon listblk_icon me5 circle-effect' id='MakeSave_32'>
                                <span className='icon-ribbon-invert font-18 icon' id='Icon_32'></span>
                            </a>
                            <a
                                href='https://miles.univariety.com/alumni/redirectforsend/492974/481669/Ataul/UUEgYXQgVW5pdmFyaWV0eQ=='
                                className='btn btn-dark-blue height-40 d-inline-flex text-white font-500 font-16 text-decoration-none justify-content-center'
                            >
                                <span>Follow - Up</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCardControl;
