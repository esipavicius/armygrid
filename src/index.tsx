import './index.style.scss';
import 'lazysizes';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';
import ROUTES from './config/route';

const LazyHomePage = React.lazy(() => {
    return import('./pages/Home.component');
});

ReactDOM.render(
    <React.Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
            <Routes>
                <Route path={ ROUTES.HOME.ROUTE } element={ <LazyHomePage /> } />
            </Routes>
        </BrowserRouter>

        <ToastContainer/>
    </React.Suspense>,
    document.getElementById('root')
);
