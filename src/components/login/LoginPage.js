import React, { useState } from 'react';
import LoginTabs from './LoginTabs';
import SaasLoginOptions from './SaasLoginOptions';
import SelfHostedLoginOptions from './SelfHostedLoginOptions';
// import '../styles.css';

const LoginPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('saas');

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="/ant-logo.svg" alt="CodeAnt AI" className="logo" />
        </div>
        
        <h1 className="login-title">Welcome to CodeAnt AI</h1>
        
        <LoginTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'saas' ? (
          <SaasLoginOptions onLogin={onLogin} />
        ) : (
          <SelfHostedLoginOptions onLogin={onLogin} />
        )}
        
        <p className="privacy-text">
          By signing up you agree to the <a href="#" className="privacy-link">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;