import React from 'react';
import ReacDOM from 'react-dom/client';
// import HelloWorldApp from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css'


ReacDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={3000}/>
    </React.StrictMode>
);