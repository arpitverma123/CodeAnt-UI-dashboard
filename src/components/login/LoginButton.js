import React from 'react';
// import '../styles.css';

const LoginButton = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="login-button"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export default LoginButton;