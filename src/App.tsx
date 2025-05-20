import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage/MenuPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import { IMenuItem } from '../src/components/MenuCard/MenuCard';

interface ICartItem extends IMenuItem {
  quantity: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);

  const handleAddToCart = (item: IMenuItem, quantity: number): void => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const getCartCount = (): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handlePageChange = (page: string): void => {
    if (!user && page !== 'login') {
      alert('Please log in first');
      return setCurrentPage('login');
    }
    setCurrentPage(page);
  };

  const handleLogin = (loggedInUser: User): void => {
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
