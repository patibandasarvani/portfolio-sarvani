import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Coding Profiles', 'Testimonials', 'Achievements', 'Blog', 'Resume', 'Contact'];
  const sectionIds = ['home', 'about', 'skills', 'projects', 'coding-profiles', 'testimonials', 'achievements', 'blog', 'resume', 'contact'];
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getNavStyle = (item: string, index: number) => {
    const isActive = activeSection === sectionIds[index];
    const baseColors = {
      home: 'from-purple-500 to-pink-500',
      about: 'from-blue-500 to-cyan-500', 
      skills: 'from-green-500 to-emerald-500',
      projects: 'from-orange-500 to-red-500',
      'coding-profiles': 'from-yellow-500 to-orange-500',
      testimonials: 'from-indigo-500 to-purple-500',
      achievements: 'from-yellow-500 to-orange-500',
      blog: 'from-pink-500 to-rose-500',
      resume: 'from-teal-500 to-cyan-500',
      contact: 'from-gray-600 to-gray-800'
    };

    if (isActive) {
      return `bg-gradient-to-r ${baseColors[item.toLowerCase() as keyof typeof baseColors]} text-white shadow-lg scale-105`;
    }
    
    return darkMode 
      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : darkMode
          ? 'bg-gray-900'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PS</span>
            </div>
            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Sarvani
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${getNavStyle(item, index)}`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? '🌞' : '🌙'}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                ☰
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
