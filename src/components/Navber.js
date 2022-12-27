import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navber = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/blog'>Error</NavLink>
        </nav>
    );
};

export default Navber;