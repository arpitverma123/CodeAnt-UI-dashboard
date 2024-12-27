import React, { useState } from 'react';
import { Github, Key } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('saas');

  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/ant-logo.svg" alt="CodeAnt AI" className="w-12 h-12" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">Welcome to CodeAnt AI</h1>

        <div className="flex gap-2 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'saas' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setActiveTab('saas')}
          >
            SAAS
          </button>
          <button
            className={`flex-1 py-2 rounded-lg transition-colors ${activeTab === 'self-hosted' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
            onClick={() => setActiveTab('self-hosted')}
          >
            Self Hosted
          </button>
        </div>

        <div className="space-y-3">
          {activeTab === 'saas' ? (
            <>
              <button
                onClick={handleLogin}
                className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Github size={20} />
                <span>Sign in with Github</span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original.svg"
                  alt="Bitbucket"
                  className="w-5 h-5"
                />
                <span>Sign in with Bitbucket</span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
                  alt="Azure"
                  className="w-5 h-5"
                />
                <span>Sign in with Azure Devops</span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg"
                  alt="GitLab"
                  className="w-5 h-5"
                />
                <span>Sign in with GitLab</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg"
                  alt="GitLab"
                  className="w-5 h-5"
                />
                <span>Self Hosted GitLab</span>
              </button>

              <button
                onClick={handleLogin}
                className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Key size={20} />
                <span>Sign in with SSO</span>
              </button>
            </>
          )}
        </div>

        <p className="text-sm text-gray-600 text-center mt-6">
          By signing up you agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;