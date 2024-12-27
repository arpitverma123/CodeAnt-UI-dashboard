import React from 'react';

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