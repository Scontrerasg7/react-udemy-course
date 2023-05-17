import React from 'react';
import ReacDOM from 'react-dom/client';
import HelloWorldApp from './HelloWorldApp';


ReacDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>
);