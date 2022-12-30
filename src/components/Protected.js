import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({notLogIn, children}) => {
    if (!notLogIn) {
       return <Navigate to='/' replace/>
    }
    return children;
};

export default Protected;