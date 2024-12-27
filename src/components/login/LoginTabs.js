import React from 'react';
// import '../styles.css';

const LoginTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      <button
        className={`tab-button ${activeTab === 'saas' ? 'active' : ''}`}
        onClick={() => onTabChange('saas')}
      >
        SAAS
      </button>
      <button
        className={`tab-button ${activeTab === 'self-hosted' ? 'active' : ''}`}
        onClick={() => onTabChange('self-hosted')}
      >
        Self Hosted
      </button>
    </div>
  );
};

export default LoginTabs;