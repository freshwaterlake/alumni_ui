import './PageTitleControl.css';
const PageTitleControl = () => {
    return (
        <div>
            <div className='container bg-white'>
                <div className='d-flex flex-wrap justify-content-between align-items-center' style={{ width: '90%' }}>
                    <nav aria-label='custom_breadcrumb' data-aos='fade-left' data-aos-delay='600' className='aos-init aos-animate'>
                        <ol className='custom_breadcrumb'>
                            <li className='custom_breadcrumb-item'>
                                <a
                                    className='text-burgandi text-decoration-none font-16'
                                    href='https://miles.univariety.com/alumni/dashboard'
                                >
                                    My Dashboard
                                </a>
                            </li>
                            <li className='custom_breadcrumb-item'>
                                <a
                                    className='text-burgandi text-decoration-none font-16'
                                    href='https://miles.univariety.com/alumni/myprofile'
                                >
                                    Profile
                                </a>
                            </li>
                            <li className='custom_breadcrumb-item active w-100 font-35 font-600 text-black mb-3' aria-current='page'>
                                Show off your skills
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PageTitleControl;
