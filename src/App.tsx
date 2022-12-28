import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MenuLayout from './common/menu/MenuLayout';
import './css/style.css';
import Dashboard from './features/dashboard/Dashboard';
import DashboardLoader from './features/dashboard/DashboardLoader';
import Demo from './features/demo/Demo';
import Directory from './features/directory/Directory';
import DirectoryLoader from './features/directory/DirectoryLoader';
import Profile from './features/profile/Profile';
import pageLoader from './library/Core/PageLoader';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MenuLayout />,
            children: [
                {
                    path: 'alumni/:id/:pageName',
                    loader: async ({ params }) => {
                        return pageLoader(params);
                    },
                    element: <Profile />,
                },
                {
                    path: '/dashboard/:id',
                    loader: async ({ params }) => {
                        return await DashboardLoader(params);
                    },
                    element: <Dashboard />,
                },
                {
                    path: '/directory/:id',
                    loader: async ({ params }) => await DirectoryLoader(params),
                    element: <Directory />,
                },
                {
                    path: '/jobPosting',
                    loader: async ({ params }) => await pageLoader({ pageName: 'jobPosting' }),
                    element: <Profile />,
                },
            ],
        },
        {
            path: '/demo',
            element: <Demo />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
