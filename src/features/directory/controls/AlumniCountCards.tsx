import higherStudiesImage from '../../../css/images/group-29476.svg';
import totalJoinedImage from '../../../css/images/group-40733.svg';
import workingImage from '../../../css/images/group-41775.svg';
import yourBatchImage from '../../../css/images/mask-group-44.svg';
import sameInterestsImage from '../../../css/images/mask-group-45.svg';

const AlumniCountCards = () => {
    const configJson = {
        totalJoinedAlumni: { label: 'Total Joined Alumni', image: totalJoinedImage, count: 1000 },
        higherStudies: { label: 'Pursuing Higher Studies', image: higherStudiesImage, count: 1001 },
        workingAlumni: { label: 'Working Alumni', image: workingImage, count: 1002 },
        fromYourBatch: { label: 'From Your Batch', image: yourBatchImage, count: 1003 },
        sameNextLevelInterests: { label: 'Same Next Level Interests', image: sameInterestsImage, count: 1004 },
    };

    return (
        <div className='d-flex flex-wrap justify-content-between align-items-center'>
            {Object.values(configJson).map((item: any) => (
                <div key={item.label} className='col-2 mb-4 aldir_box p-2'>
                    <div
                        className='bg-white rounded alumni-directory-block h-100 aos-init aos-animate'
                        data-aos='fade-up'
                        data-aos-delay='600'
                    >
                        <div className='number font-28 font-600 d-flex justify-content-between align-items-center'>
                            {item.count}
                            <a href='javascript:;' className='icon-right-arrow font-14 font-600 text-decoration-none text-dark-blue'></a>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='font-16 font-500 flex-1 text-wrap'>{item.label}</div>
                            <div className='alumni-directory-img'>
                                <img src={item.image} className='img-fluid' width='52px' height='52px' alt='Total Joined Alumni' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AlumniCountCards;
