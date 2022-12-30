import React, { useState } from 'react';
import {  useSearchParams } from 'react-router-dom';

const User = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ name: name ,age: age})
        
    }
    return (
        <div>
            <h1>Hello User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <input
                    type="text"
                    placeholder='age'
                    value={age}
                    onChange={(e) => { setAge(e.target.value) }}
                />
                <button type='submit'>Find</button>
            </form>
        </div>
    );
};

export default User;