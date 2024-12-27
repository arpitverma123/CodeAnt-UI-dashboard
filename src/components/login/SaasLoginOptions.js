import React from 'react';
import { Github } from 'lucide-react';
import LoginButton from './LoginButton';
// import '../styles.css';

const SaasLoginOptions = ({ onLogin }) => {
  return (
    <div className="login-options">
      <LoginButton
        icon={<Github size={20} />}
        label="Sign in with Github"
        onClick={onLogin}
      />

      <LoginButton
        icon={<img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg"
          alt="Bitbucket"
        />}
        label="Sign in with Bitbucket"
        onClick={onLogin}
      />

      <LoginButton
        icon={<img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
          alt="Azure"
        />}
        label="Sign in with Azure Devops"
        onClick={onLogin}
      />

      <LoginButton
        icon={<img
          src="https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg"
          alt="GitLab"
        />}
        label="Sign in with GitLab"
        onClick={onLogin}
      />
    </div>
  );
};

export default SaasLoginOptions;