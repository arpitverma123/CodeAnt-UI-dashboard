import React from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../Sidebar';
// import ';

const MobileMenu = ({ isOpen, onToggle }) => {
  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={onToggle}
      >
        <Menu size={24} />
      </button>

      <div className={`mobile-menu-overlay ${isOpen ? 'block' : 'hidden'}`}>
        <div className={`mobile-menu-sidebar ${isOpen ? 'open' : ''}`}>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;