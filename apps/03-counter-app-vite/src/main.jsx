import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './App';
import { FirstApp } from './FirstApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title='Jeremy' subtitle='Soy un subtítulo' />
    </React.StrictMode>
);