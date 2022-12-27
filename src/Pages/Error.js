import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='App'>
            <h1>404 Page Not Found</h1>
            <button onClick={() => {
                navigate('/')
            }}>Go to Home</button>
        </div>
    );
};

export default Error;