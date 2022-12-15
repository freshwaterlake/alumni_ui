import { Outlet } from 'react-router-dom';

const MenuLayout = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className='container-fluid'>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='/onboarding'>
                                    Onboarding Dashboard!!!
                                </a>
                            </li>
                            <li className='nav-item dropdown'>
                                <div className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    Next Move
                                </div>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a className='dropdown-item' href='/alumni/1000/mySkillsInfo'>
                                            Skill Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='/alumni/1000/myHigherStudiesInfo'>
                                            Study Preferences
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='/alumni/1000/myJobPreferInfo'>
                                            Job Preferences
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='/alumni/1000/myAchieveInfo'>
                                            Achievements
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default MenuLayout;
