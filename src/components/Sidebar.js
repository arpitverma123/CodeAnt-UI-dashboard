import React from 'react';
import { Code2, Cloud, HelpCircle, Settings, HeadphonesIcon, LogOut } from 'lucide-react';
// import '../styles.css';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <img src="/ant-logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
        <span className="font-semibold text-lg">CodeAnt AI</span>
      </div>
      
      <div className="flex flex-col flex-1">
        <div className="bg-blue-600 text-white rounded-lg p-3 mb-2 flex items-center gap-2">
          <Code2 size={20} />
          <span>Repositories</span>
        </div>
        
        <div className="text-gray-700 p-3 hover:bg-gray-100 rounded-lg mb-2 flex items-center gap-2">
          <Cloud size={20} />
          <span>Cloud Security</span>
        </div>
        
        <div className="text-gray-700 p-3 hover:bg-gray-100 rounded-lg mb-2 flex items-center gap-2">
          <HelpCircle size={20} />
          <span>How to Use</span>
        </div>
        
        <div className="text-gray-700 p-3 hover:bg-gray-100 rounded-lg mb-2 flex items-center gap-2">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="text-gray-700 p-3 hover:bg-gray-100 rounded-lg mb-2 flex items-center gap-2">
          <HeadphonesIcon size={20} />
          <span>Support</span>
        </div>
        
        <div className="text-gray-700 p-3 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;