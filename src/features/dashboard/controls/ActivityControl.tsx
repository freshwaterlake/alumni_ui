import { useContext, useState } from 'react';
import sideImage4 from '../../../css/images/access_resources_and_research_img.png';
import sideImage1 from '../../../css/images/group-25209.svg';
import sideImage2 from '../../../css/images/group-25309.svg';
import sideImage3 from '../../../css/images/group-705.svg';

import { SmartContext } from '../../../library/Core/SmartContext';

const ActivityControl = (props: any) => {
    const { state, dispatch } = useContext(SmartContext);
    const activities = state?.internal?.activitiesConfig?.find((activityGroup) => activityGroup.id === props.selectedGroup)['activities'];
    const activityGroup = state?.internal?.activitiesConfig?.find((activityGroup) => activityGroup.id === props.selectedGroup);
    const [showingTextForId, setShowingTextForId] = useState(activities[0]['id']);
    let sideImage: any;

    const handleReadMore = (event: any, id: any) => {
        event.preventDefault();
        setShowingTextForId(id);
        showingTextForId === id ? setShowingTextForId(null) : setShowingTextForId(id);
    };

    switch (props.selectedGroup) {
        case 'INTRODUCTIONS':
            sideImage = sideImage1;
            break;
        case 'COMMUNICATIONS':
            sideImage = sideImage2;
            break;
        case 'CONTRIBUTING':
            sideImage = sideImage3;
            break;
        case 'CAREER':
            sideImage = sideImage4;
            break;
    }

    return (
        <div className='row justify-content-between'>
            <div className='flex-1'>
                <div className='profile_setup p-0'>
                    {activities.map((activity: any) => (
                        <div
                            key={activity.id}
                            className='icn_details d-flex flex-wrap justify-content-between aos-init aos-animate'
                            data-aos='fade-up'
                            data-aos-delay='900'
                        >
                            <span className='iconsec d-flex justify-content-center align-items-center me-0 me-sm-3'>
                                <b className='icon-multiple-users'></b>
                            </span>
                            <div className='flex-1'>
                                <p className='iconsec_title'>{activity.name}</p>
                                {showingTextForId === activity.id && <p className=''>{activity.text}</p>}
                                <a className={`iconsec_link`} onClick={(event) => handleReadMore(event, activity.id)}>
                                    <span>{showingTextForId === activity.id ? 'Read Less' : 'Read More'}</span>
                                </a>
                            </div>
                            <a href='https://miles.univariety.com/alumni/peeraccount' className='btn btn-complete-now activity-btn ms-4'>
                                <span>{activity.buttonLabel}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='col-lg-auto col-md-4'>
                <div className='profile_setup_help' data-aos='fade-up' data-aos-delay='900'>
                    <p className='font-18 font-600 mb-3'>{activityGroup['sidebarHeading']}</p>
                    <img className='mb-3 img-fluid float_horizontal_animate' src={sideImage} alt='Profile Setup'></img>
                    <p className='font-16 font-400 m-0'>{activityGroup['sidebarLongComment']}</p>
                </div>
            </div>
        </div>
    );
};

export default ActivityControl;
