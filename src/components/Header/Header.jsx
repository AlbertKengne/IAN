import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../common/Button';
import { Logo } from './Logo';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projects' },
    { name: 'Événements', path: '/events' },
    { name: 'Formation', path: '/training' },
    { name: 'À propos', path: '/about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a192f]/85 backdrop-blur-lg shadow-lg shadow-[#eb600e]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Logo />
          </motion.div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-white transition-all duration-300 relative py-2 group ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
              >
                {item.name}
                <motion.span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] ${
                    location.pathname === item.path ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/signin">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#eb600e] to-[#146cb4] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
                <Button 
                  variant="ghost"
                  className="relative px-6 py-2 text-gray-600 hover:text-[#eb600e] bg-white hover:bg-white/90 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm group-hover:shadow-md"
                >
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Se connecter</span>
                </Button>
              </motion.div>
            </Link>
            <Link to="/signup">
              <Button 
                variant="primary"
                className="bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white px-6 py-2 rounded-xl transition-all duration-300"
              >
                Rejoindre
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-[#eb600e]/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mt-1.5 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="px-4 pt-2 pb-6 bg-gradient-to-b from-[#0a192f]/95 to-[#0a192f] backdrop-blur-lg space-y-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 px-4 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg ${
                location.pathname === item.path ? 'text-white bg-white/10' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700/50">
            <button className="w-full py-2.5 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg">
              Se connecter
            </button>
            <button className="w-full py-2.5 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white rounded-lg transition-all duration-500 transform hover:shadow-lg hover:shadow-[#eb600e]/20">
              Rejoindre
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};