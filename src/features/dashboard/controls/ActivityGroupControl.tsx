import { useContext } from 'react';
import { SmartContext } from '../../../library/Core/SmartContext';

const ActivityGroupControl = (props: any) => {
    const { state, dispatch } = useContext(SmartContext);

    return (
        <>
            {state?.internal?.activitiesConfig && (
                <div className='row justify-content-center mt-4 mt-sm-5'>
                    {state?.internal?.activitiesConfig?.map((activityGroup) => (
                        <div key={activityGroup.id} className='col-lg-4 col-md-6 col-sm-6 mb-5'>
                            <div className='milestone' data-aos='fade-up' data-aos-delay='400'>
                                <div className='icon'>
                                    <span className={activityGroup.icon}></span>
                                </div>
                                <div className='count'>{activityGroup.order}</div>
                                <h3>{activityGroup.name}</h3>
                                <div className='status_buttun'>
                                    <ul className='progress-status'>
                                        <li className='completed'></li>
                                        <li className='completed'></li>
                                        <li className='completed'></li>
                                    </ul>
                                    <div className='activities_status'></div>
                                    <button className='btn btn-complete-now' onClick={() => props.onCompleteNowClick(activityGroup.id)}>
                                        <span>Complete Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ActivityGroupControl;
