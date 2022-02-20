import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink exact to='/'>
                Home
            </NavLink>
            <NavLink exact to='/cookies'>
                Cookies
            </NavLink>
            <NavLink exact to='/reeses'>
                Reese's
            </NavLink>
            <NavLink exact to='/cheetos'>
                Cheetos
            </NavLink>
        </nav>
        )
    
}

export default Navbar;