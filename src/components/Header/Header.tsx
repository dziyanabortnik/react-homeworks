import React from 'react';
import './Header.css';
import logoImage from '../../assets/icons/logo.svg';
import cartImage from '../../assets/icons/shopping-cart.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface IHeaderProps {
  onPageChange: (page: string) => void;
  currentPage: string;
  isLoggedIn: boolean;
}

const Header: React.FC<IHeaderProps> = ({ onPageChange,   currentPage }) => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

    return (
      <header>
        <div className="container wrapper">
          <div className="logo">
            <img src={logoImage} alt="Logo" className="logo-icon" />
          </div>
          <div className="navigation">
            <nav>
              <ul className="nav-links">
                <li>
                  <a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={() => onPageChange('home')}>Home</a>
                </li>
                <li>
                  <a href="#" className={currentPage === 'menu' ? 'active' : ''} onClick={() => onPageChange('menu')}>Menu</a>
                </li>
                <li><a href="#">Company</a></li>
                <li>
                  <a href="#" className={currentPage === 'login' ? 'active' : ''} onClick={() => onPageChange('login')}>Login</a>
                </li>
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

export default Header;
