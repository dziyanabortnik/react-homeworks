import React from 'react';
import './Header.css';
import logoImage from './../../assets/icons/logo.svg';
import cartImage from './../../assets/icons/shopping-cart.svg';

function Header() {
    return (
        <header>
            <div className="container wrapper">
                <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-icon" />
            </div>
            <div className="navigation">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a className="active" href="#menu">Menu</a></li>
                        <li><a href="#company">Company</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
                <div className="cart">
                    <img src={cartImage} alt="Cart" className="cart-icon" />
                </div>
             </div>
           </div>
        </header>
    );
}

export default Header;
