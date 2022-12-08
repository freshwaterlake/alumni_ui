import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
import './App.css';
import Demo from './features/demo/Demo';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='App'>
            <Demo />
        </div>
    );
}

export default App;
