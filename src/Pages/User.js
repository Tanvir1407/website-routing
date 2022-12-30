import React, { useState } from 'react';
import {  useSearchParams } from 'react-router-dom';

const User = () => {
    const [name, setName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name })
        e.value = '';
    }
    return (
        <div>
            <h1>Hello User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={ (e)=>{setName(e.target.value)}} />
                <button type='submit'>Find</button>
            </form>
        </div>
    );
};

export default User;