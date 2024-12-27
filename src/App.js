import React, { useState } from 'react';
import LoginPage from '../src/components/LoginPage';
import MainLayout from '../src/components/MainLayout';
import './index.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <MainLayout /> : <LoginPage onLogin={handleLogin} />;
}

export default App;