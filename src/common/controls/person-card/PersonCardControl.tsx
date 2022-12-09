import { useContext } from 'react';
import { SmartContext } from '../../../library/Core/SmartContext';
import { getControlValueFromState } from '../../../library/Core/SmartFunctions';
import { ChildControlArguments, State } from '../../../library/Core/SmartTypes';
import './PersonCardControl.css';

const PersonCardControl = (props: ChildControlArguments) => {
    const { state, dispatch } = useContext(SmartContext);
    const { dataKey } = { ...props };
    const data = getControlValueFromState(dataKey, state as State);

    return (
        <div className='alumni_college'>
            <div className='alumni_college_yr'>2017 </div>
            <div className='alumni_college_top'>
                <div className='alumni_college_profileimg'>
                    <a
                        href='https://miles.univariety.com/alumni/directory_details/492652/481350'
                        className='d-flex justify-content-start align-items-start pe-0 pe-md-3 mb-2 mb-md-0  text-decoration-none'
                    >
                        <img src='JohnDoe.png' width='60' />
                    </a>
                </div>
                <div className='alumni_college_name'>
                    <a
                        href='https://miles.univariety.com/alumni/directory_details/492652/481350'
                        className=' text-decoration-none'
                        style={{ color: 'black' }}
                    >
                        <p>testingsynch backfront</p>
                    </a>
                </div>
            </div>
            <div className='alumni_college_bottom'>
                <div className='courseLabel'>
                    <label>Course</label>
                    <div className='course_name'>Business Management</div>
                </div>
                <div className='CollegeLabel'>
                    <label>College</label>
                    <div className='college_name'>
                        <span
                            className='alumni_university'
                            data-bs-toggle='tooltip'
                            title=''
                            data-bs-original-title='Amity Global Business School, Bengaluru'
                        >
                            Amity Global Business School, Bengaluru
                        </span>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-start'>
                    <a
                        href='https://miles.univariety.com/alumni/send_message/message_from_directory/492652/testingsynch'
                        className='btn btn-primary mb-1 height-40 font-16 font-500 mt-2'
                    >
                        <span>Send Message</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PersonCardControl;
