// Gets cart item count from Redux (cartSlice). Calls toggleTheme() from ThemeContext.
import React from 'react';
import './Header.css';
import logoImage from '../../assets/icons/logo.svg';
import cartImage from '../../assets/icons/shopping-cart.svg';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

interface IHeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isLoggedIn }) => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <header>
        <div className="container wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logoImage} alt="Logo" className="logo-icon" />
            </Link>
          </div>
          <div className="navigation">
            <nav>
              <ul className="nav-links">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                <li><NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''}>Menu</NavLink></li>
                <li><Link to="#">Company</Link></li>
                <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
              </ul>
            </nav>
            <div className="actions">
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === 'light' ? 'Light' : 'Dark'}
              </button>
              <div 
                onClick={() => navigate('/order')} className="cart">
                <img src={cartImage} alt="Cart" className="cart-icon" />
                <span className="cart-count">{cartCount}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;
