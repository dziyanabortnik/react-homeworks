import React from 'react';
import './Header.css';
import logoImage from '../../assets/icons/logo.svg';
import cartImage from '../../assets/icons/shopping-cart.svg';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface IHeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isLoggedIn }) => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const navigate = useNavigate();

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="#">Company</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
            <div 
              onClick={() => navigate('/order')} className="cart">
              <img src={cartImage} alt="Cart" className="cart-icon" />
              <span className="cart-count">{cartCount}</span>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;
