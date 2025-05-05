import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage/MenuPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const handleAddToCart = (item, quantity) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    return (
      <div>
        <Header cartCount={getCartCount()} onPageChange={handlePageChange} currentPage={currentPage} />
        {currentPage === 'home' ? (
          <HomePage />
        ) : (
          <MenuPage onAddToCart={handleAddToCart} />
        )}
        <Footer />
      </div>
    );
}

export default App;
