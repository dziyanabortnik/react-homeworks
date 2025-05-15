import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage/MenuPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

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
    if (!user && page !== 'login') {
      alert('Please log in first');
      return setCurrentPage('login');
    }
    setCurrentPage(page);
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setCurrentPage('home');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setCurrentPage('home');
      } else {
        setUser(null);
        setCurrentPage('login');
      }
    });

    return () => unsubscribe();
  }, []);

    return (
      <div>
        <Header 
          cartCount={getCartCount()} 
          onPageChange={handlePageChange} 
          currentPage={currentPage} 
          isLoggedIn={!!user}
        />
        
        {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
        {currentPage === 'home' && user && <HomePage />}
        {currentPage === 'menu' && user && <MenuPage onAddToCart={handleAddToCart} />}

        <Footer />
      </div>
    );
}

export default App;
