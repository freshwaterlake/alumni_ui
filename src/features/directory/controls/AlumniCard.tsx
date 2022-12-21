const AlumniCard = (props: any) => {
    const data = props.data;

    // TODO: Codes need to be finalized
    const getDataConfigForType = (type: string): any => {
        switch (type) {
            case 'HOMEMAKER':
            case 'TAKING_GAP_YEAR':
            case 'PURSUING_UG':
                return getDataConfigForUniqueTypes('UG');
            case 'PURSUING_PG':
                return data.pgDepartment ? getDataConfigForUniqueTypes('PG') : getDataConfigForUniqueTypes('UG');
            case 'IN_DEFENSE':
                return data.defenseDesignation ? getDataConfigForUniqueTypes('DEFENSE') : getDataConfigForUniqueTypes('UG');
            case 'WORKING':
                return data.designation ? getDataConfigForUniqueTypes('WORKING') : getDataConfigForUniqueTypes('UG');
            case 'PROFESSIONAL_PRACTICE':
            case 'ENTREPRENEURSHIP':
                return data.designation ? getDataConfigForUniqueTypes('WORKING') : getDataConfigForUniqueTypes('UG');
            default:
                return getDataConfigForUniqueTypes('UG');
        }
    };

    const getDataConfigForUniqueTypes = (type: string): any => {
        let titleConfig = { firstLabel: '', firstValue: '', secondLabel: '', secondValue: '' };
        switch (type) {
            case 'UG':
                titleConfig.firstLabel = 'Course';
                titleConfig.secondLabel = 'College';
                titleConfig.firstValue = data.fieldOfStudy ? data.fieldOfStudy : '-';
                titleConfig.secondValue = data.collegeName ? data.collegeName : '-';
                break;
            case 'PG':
                titleConfig.firstLabel = 'Course';
                titleConfig.secondLabel = 'College';
                titleConfig.firstValue = data.fieldOfStudy ? data.fieldOfStudy : '-';
                titleConfig.secondValue = data.collegeName ? data.collegeName : '-';
                break;
            case 'DEFENSE':
                titleConfig.firstLabel = 'Designation';
                titleConfig.secondLabel = 'In Defense';
                titleConfig.firstValue = data.defenseDesignation ? data.defenseDesignation : '-';
                titleConfig.secondValue = 'In Defense';
                break;
            case 'WORKING':
                titleConfig.firstLabel = 'Company';
                titleConfig.secondLabel = 'Designation';
                titleConfig.firstValue = data.companyName ? data.companyName : '-';
                titleConfig.secondValue = data.designation ? data.designation : '-';
                break;
        }
        return titleConfig;
    };

    const cardConfig: any = getDataConfigForType(data.type);

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
                            <p>{data.name}</p>
                        </a>
                    </div>
                </div>
                <div className='alumni_college_bottom'>
                    <div className='courseLabel'>
                        <label>{cardConfig.secondLabel}</label>
                        <div className='course_name'>{cardConfig.secondValue}</div>
                    </div>
                    <div className='CollegeLabel'>
                        <label>{cardConfig.firstLabel}</label>
                        <div className='college_name'>
                            <span
                                className='alumni_university'
                                data-bs-toggle='tooltip'
                                title=''
                                data-bs-original-title='All India Institute of Medical Sciences (AIIMS), New Delhi'
                            >
                                {cardConfig.firstValue}
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
