import React from 'react';
import { Key } from 'lucide-react';
import LoginButton from './LoginButton';
// import '../styles.css';

const SelfHostedLoginOptions = ({ onLogin }) => {
  return (
    <div className="login-options">
      <LoginButton
        icon={<img
          src="https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg"
          alt="GitLab"
        />}
        label="Self Hosted GitLab"
        onClick={onLogin}
      />

      <LoginButton
        icon={<Key size={20} />}
        label="Sign in with SSO"
        onClick={onLogin}
      />
    </div>
  );
};

export default SelfHostedLoginOptions;