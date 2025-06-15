import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import MenuPage from './pages/MenuPage/MenuPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import OrderPage from './pages/OrderPage/OrderPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RequireAuth from './components/Auth/RequireAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser, clearUser, setLoading } from './features/slice/userSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser({ uid: firebaseUser.uid, email: firebaseUser.email }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/" >
            <Route element={<HomePage />} index />
            <Route element={<MenuPage />} path="menu" />
            <Route element={<LoginPage />} path="login" />
            <Route element={<RequireAuth><OrderPage /></RequireAuth>} path="order" />
            <Route element={<NotFoundPage />} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
