import React, { Component } from 'react';
import './Header.css';
import logoImage from '../../assets/icons/logo.svg';
import cartImage from '../../assets/icons/shopping-cart.svg';

class Header extends Component {
  render() {
    const { cartCount } = this.props;

    return (
      <header>
        <div className="container wrapper">
          <div className="logo">
            <img src={logoImage} alt="Logo" className="logo-icon" />
          </div>
          <div className="navigation">
            <nav>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a className="active" href="#">Menu</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </nav>
            <div className="cart">
              <img src={cartImage} alt="Cart" className="cart-icon" />
              <span className="cart-count">{cartCount}</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
