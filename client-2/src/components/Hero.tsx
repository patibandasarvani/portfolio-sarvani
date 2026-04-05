import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import TypingAnimation from './TypingAnimation';
import ResumeButton from './ResumeButton';

const Hero: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900' : 'bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-purple-400 ring-4 ring-purple-200 dark:ring-purple-600">
              <img 
                src="/profile.jpg" 
                alt="Patibanda Sarvani" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">SP</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${
              darkMode 
                ? 'from-purple-400 via-pink-400 to-indigo-400' 
                : 'from-purple-600 via-pink-600 to-indigo-600'
            } bg-clip-text text-transparent`}
          >
            {personalInfo.name}
          </motion.h1>

          <TypingAnimation />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <motion.a
              href="https://campus-connect-f6er0mt02-patibandasarvanis-projects.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live Project
            </motion.a>
            <motion.a
              href="https://github.com/patibandasarvani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg hover:from-gray-800 hover:to-black transition-all shadow-lg hover:shadow-gray-700/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sarvani-patibanda-61877a2b5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <ResumeButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <motion.a
              href="#about"
              className="inline-block"
              whileHover={{ y: 5 }}
            >
              <div className={`w-8 h-12 border-2 rounded-full flex justify-center ${
                darkMode ? 'border-purple-400' : 'border-purple-600'
              }`}>
                <motion.div
                  className={`w-1 h-3 rounded-full mt-2 ${
                    darkMode ? 'bg-purple-400' : 'bg-purple-600'
                  }`}
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
