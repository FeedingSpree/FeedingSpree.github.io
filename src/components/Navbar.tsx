import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-jissa-black/95 backdrop-blur-md border-b border-jissa-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/JISSA FINAL LOGO.png" alt="JISSA Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">JISSA</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#events" className="text-gray-300 hover:text-jissa-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Events
              </a>
              <a href="#awards" className="text-gray-300 hover:text-jissa-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Awards
              </a>
              <a href="#contact" className="text-gray-300 hover:text-jissa-green px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <Link 
                to="/admin" 
                className="bg-jissa-gray hover:bg-jissa-light-gray text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Admin
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-jissa-dark-gray">
            <a href="#events" className="text-gray-300 hover:text-jissa-green block px-3 py-2 rounded-md text-base font-medium">
              Events
            </a>
            <a href="#awards" className="text-gray-300 hover:text-jissa-green block px-3 py-2 rounded-md text-base font-medium">
              Awards
            </a>
            <a href="#contact" className="text-gray-300 hover:text-jissa-green block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <Link to="/admin" className="text-gray-300 hover:text-jissa-green block px-3 py-2 rounded-md text-base font-medium">
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;