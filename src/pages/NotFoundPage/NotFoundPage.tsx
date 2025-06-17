import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <main className="main-container main-wrapper">
      <h1>404</h1>
      <p>Page not found.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </main>
  );
};

export default NotFoundPage;
