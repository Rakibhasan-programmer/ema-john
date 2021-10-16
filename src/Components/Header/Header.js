import React from 'react';
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
                    <a href="/shop">Shop</a>
                    <a href="/orders">Order review</a>
                    <a href="/inventory">Manage inventory</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;