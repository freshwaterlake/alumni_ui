import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MenuLayout from './common/menu/MenuLayout';
import Profile from './features/profile/Profile';
import ProfileLoader from './features/profile/ProfileLoader';

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
                        return await ProfileLoader(params);
                    },
                    element: <Profile />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
