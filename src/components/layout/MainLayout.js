import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import MobileMenu from './MobileMenu';
import RepositoryList from '../RepositoryList';
// import '../styles.css';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <RepositoryList />
    </div>
  );
}

export default MainLayout;