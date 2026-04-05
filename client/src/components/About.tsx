import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className={`prose prose-lg ${darkMode ? 'prose-invert' : ''}`}>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Hello! I'm Patibanda Sarvani, a passionate Computer Science student and Frontend Developer 
              with a keen interest in creating beautiful and functional web applications. I love turning 
              ideas into reality through code and am constantly learning new technologies to enhance my skills.
            </p>
            <p className={`text-lg leading-relaxed mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My journey in tech started with curiosity about how websites work, and has evolved into a 
              deep passion for frontend development. I enjoy working with modern JavaScript frameworks 
              and creating responsive, user-friendly interfaces that provide exceptional user experiences.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Education
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Currently pursuing Computer Science degree with focus on software development and web technologies.
              </p>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Interests
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Frontend development, UI/UX design, responsive web design, and creating interactive user experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
