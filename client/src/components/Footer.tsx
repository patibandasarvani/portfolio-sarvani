import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href="https://github.com/patibandasarvani"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white">🐱</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sarvani-patibanda-61877a2b5"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white">💼</span>
            </motion.a>
            <motion.a
              href="mailto:patibandasarvani@gmail.com"
              className={`w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white">📧</span>
            </motion.a>
          </div>
          
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © 2024 Patibanda Sarvani. Built with ❤️ using MERN stack.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4"
          >
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Made with React, Node.js, MongoDB, and Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
