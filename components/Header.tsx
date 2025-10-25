
import React, { useState } from 'react';

const Logo: React.FC = () => (
  <a href="#home" className="flex items-center space-x-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
    <span className="text-2xl font-bold text-gray-800">Traders Net Cafe</span>
  </a>
);

const NavLinks: React.FC<{ className?: string, onLinkClick?: () => void }> = ({ className, onLinkClick }) => (
  <nav className={className}>
    <a href="#home" onClick={onLinkClick} className="px-4 py-2 hover:text-blue-600 transition-colors duration-300">Home</a>
    <a href="#about" onClick={onLinkClick} className="px-4 py-2 hover:text-blue-600 transition-colors duration-300">About Us</a>
    <a href="#services" onClick={onLinkClick} className="px-4 py-2 hover:text-blue-600 transition-colors duration-300">Services</a>
    <a href="#activities" onClick={onLinkClick} className="px-4 py-2 hover:text-blue-600 transition-colors duration-300">Activities</a>
    <a href="#contact" onClick={onLinkClick} className="px-4 py-2 hover:text-blue-600 transition-colors duration-300">Contact Us</a>
  </nav>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center text-lg font-medium">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <NavLinks className="flex flex-col items-center py-4 space-y-2 text-lg" onLinkClick={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
