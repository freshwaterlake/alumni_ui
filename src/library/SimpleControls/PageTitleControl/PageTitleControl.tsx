import { useContext } from 'react';
import { SmartContext } from '../../Core/SmartContext';
import './PageTitleControl.css';
const PageTitleControl = () => {
    const { state, dispatch } = useContext(SmartContext);
    return (
        <div>
            <div className='container' style={{ padding: 0 }}>
                <div className='d-flex flex-wrap justify-content-start' style={{ width: '80%' }}>
                    <span className='col-12 pt-3'>
                        <nav aria-label='breadcrumb' data-aos='fade-left' data-aos-delay='600' className='aos-init aos-animate'>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>
                                    <a
                                        className='text-burgandi text-decoration-none font-16'
                                        href='https://miles.univariety.com/alumni/dashboard'
                                    >
                                        My Dashboard
                                    </a>
                                </li>
                                <li className='breadcrumb-item'>
                                    <a
                                        className='text-burgandi text-decoration-none font-16'
                                        href='https://miles.univariety.com/alumni/myprofile'
                                    >
                                        Profile
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </span>

                    <div>
                        <p className='col-12' style={{ fontFamily: 'Jost", sans-serif', fontSize: '30px', fontWeight: 600 }}>
                            {state?.formConfig?.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTitleControl;
