const AlumniCard = () => {
    return (
        <div className='col-sm-6 p-2 Dusers'>
            <div className='alumni_college'>
                <div className='alumni_college_yr'>2019</div>
                <div className='alumni_college_top'>
                    <div className='alumni_college_profileimg'>
                        <a
                            href='https://miles.univariety.com/alumni/directory_details/493182/481879'
                            className='d-flex justify-content-start align-items-start pe-0 pe-md-3 mb-2 mb-md-0 uniprof_tab_align text-decoration-none'
                        >
                            <img src='https://miles.univariety.com/alumni/public/images/dummy_female.svg' width='60' />
                        </a>
                    </div>
                    <div className='alumni_college_name'>
                        <a
                            href='https://miles.univariety.com/alumni/directory_details/493182/481879'
                            className='text-decoration-none'
                            style={{ color: 'black' }}
                        >
                            <p>varsha p</p>
                        </a>
                    </div>
                </div>
                <div className='alumni_college_bottom'>
                    <div className='courseLabel'>
                        <label>Course</label>
                        <div className='course_name'>Computer Science &amp; Information Technology</div>
                    </div>
                    <div className='CollegeLabel'>
                        <label>College</label>
                        <div className='college_name'>
                            <span
                                className='alumni_university'
                                data-bs-toggle='tooltip'
                                title=''
                                data-bs-original-title='All India Institute of Medical Sciences (AIIMS), New Delhi'
                            >
                                All India Institute of Medical Sciences (AIIMS), New Delhi
                            </span>
                            <span
                                className='prestigious-colleges-badge'
                                data-bs-toggle='tooltip'
                                title=''
                                data-bs-original-title='Prestigious Colleges'
                                aria-label='Prestigious Colleges'
                            >
                                <img
                                    src='https://miles.univariety.com/alumni/public/images/subtraction.svg'
                                    className='img-fluid'
                                    width='16'
                                />
                            </span>
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-start'>
                        <a
                            href='https://miles.univariety.com/alumni/send_message/message_from_directory/493182/varsha'
                            className='btn btn-green mb-1 height-40 font-16 font-500 mt-2'
                        >
                            <span>Send Message</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniCard;
