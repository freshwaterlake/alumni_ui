import { Outlet } from 'react-router-dom';
import './MenuLayout.css';

const MenuLayout = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg rounded-0' style={{ backgroundColor: '#0b3454', height: '70px' }}>
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
                            <li className='nav-item dropdown'>
                                <div
                                    className='nav-link dropdown-toggle text-white'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    MY DASHBOARD
                                </div>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a className='dropdown-item' href='/alumni/1000/mySkillsInfo'>
                                            Getting Started
                                        </a>
                                    </li>
                                    <li>
                                        <a className='dropdown-item' href='/alumni/1000/mySkillsInfo'>
                                            Dashboard
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav-item dropdown'>
                                <div
                                    className='nav-link dropdown-toggle text-white'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    NEXT MOVE
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
