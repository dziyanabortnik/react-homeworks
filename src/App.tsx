import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuPage from './pages/MenuPage/MenuPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { setUser, clearUser } from './features/slice/userSlice';
import { setCurrentPage } from './features/slice/navigationSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.navigation);
  const user = useSelector((state: RootState) => state.user);

  const handlePageChange = (page: string): void => {
    if (!user && page !== 'login') {
      alert('Please log in first');
      dispatch(setCurrentPage('login'));
    } else {
      dispatch(setCurrentPage(page));
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser(firebaseUser));
        dispatch(setCurrentPage('home'));
      } else {
        dispatch(clearUser());
        dispatch(setCurrentPage('login'));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Header
        onPageChange={handlePageChange}
        currentPage={currentPage}
        isLoggedIn={!!user}
      />

      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'home' && user && <HomePage />}
      {currentPage === 'menu' && user && <MenuPage />}

      <Footer />
    </div>
  );
};

export default App;
