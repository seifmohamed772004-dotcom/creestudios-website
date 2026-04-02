import React from 'react';
import './Logincounter.css';

const LoginCounter = ({ heading = 'Default H1', subtitle = 'Default H2' }) => {
    return (
        <div className="login-counter">
            <h1 className='Counterheading'>{heading}</h1>
            <h2 className='CounterNumber'>{subtitle}</h2>
        </div>
    );
};

export default LoginCounter;