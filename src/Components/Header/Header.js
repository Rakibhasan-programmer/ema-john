import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/review">Order review</NavLink>
                    <NavLink to="/inventory">Manage inventory</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;