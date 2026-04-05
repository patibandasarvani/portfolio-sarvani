import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Achievements: React.FC = () => {
  const { darkMode } = useTheme();

  const achievements = [
    {
      icon: '🎓',
      title: 'B.Tech CSE Student',
      description: 'Currently pursuing Computer Science Engineering at Vignan University, Vadlamudi',
      date: '2023-2027',
      category: 'Academic'
    },
    {
      icon: '📚',
      title: 'Intermediate MPC',
      description: 'Completed 10+2 with Mathematics, Physics, Chemistry from Narayana Junior College',
      date: '2021-2023',
      category: 'Academic'
    },
    {
      icon: '🏆',
      title: 'SSC Achievement',
      description: 'Completed Secondary School Certificate with excellent performance',
      date: '2020-2021',
      category: 'Academic'
    },
    {
      icon: '💻',
      title: 'Full Stack Projects',
      description: 'Developed multiple web applications using MERN stack and Flask',
      date: '2023-Present',
      category: 'Projects'
    },
    {
      icon: '🔧',
      title: 'Technical Skills',
      description: 'Proficient in C, Java, Python, React, Node.js, MySQL, MongoDB',
      date: '2023-Present',
      category: 'Skills'
    },
    {
      icon: '📜',
      title: 'Certifications',
      description: 'Cambridge PET Level B1 and NPTEL certifications in various domains',
      date: '2023-Present',
      category: 'Certifications'
    }
  ];

  const categories = ['All', 'Academic', 'Projects', 'Skills', 'Certifications'];

  return (
    <section
      id="achievements"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Milestones and accomplishments in my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              } transition-all duration-300`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {achievement.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {achievement.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <span className="text-2xl">🎓</span>
            <div className="text-left">
              <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Currently Pursuing
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                B.Tech CSE at Vignan University • Expected 2027
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
