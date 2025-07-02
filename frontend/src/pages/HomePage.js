import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1 className="homepage-title">Rural Freelancer</h1>
      <button className="login-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
};

export default HomePage;
