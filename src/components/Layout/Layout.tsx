import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../../app/store';

const Layout: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <Header isLoggedIn={!!user.user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
