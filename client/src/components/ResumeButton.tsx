import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ResumeButton: React.FC = () => {
  const { darkMode } = useTheme();

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Patibanda_Sarvani_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        darkMode 
          ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800' 
          : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
      } shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="flex items-center space-x-2">
        <span>📄</span>
        <span>Download Resume</span>
      </span>
    </motion.button>
  );
};

export default ResumeButton;
