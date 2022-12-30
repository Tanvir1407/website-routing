import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navber = ({notLogIn, setLogIn}) => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/blog'>Error</NavLink>
            {
                notLogIn ? <button onClick={()=> setLogIn(!notLogIn)}>Log out</button> : <button onClick={()=> setLogIn(!notLogIn)}>Log in</button>
            }
        </nav>
    );
};

export default Navber;