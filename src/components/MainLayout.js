import React, { useState } from 'react';
import Sidebar from './Sidebar';
import RepositoryList from './RepositoryList';
import { Menu } from 'lucide-react';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar - Mobile */}
      <div className={`
        lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40
        ${isMobileMenuOpen ? 'block' : 'hidden'}
      `}>
        <div className={`
          w-64 h-full bg-white transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar />
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <RepositoryList />
    </div>
  );
}

export default MainLayout;