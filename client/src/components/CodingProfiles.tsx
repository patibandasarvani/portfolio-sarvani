import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CodingProfiles: React.FC = () => {
  const { darkMode } = useTheme();

  const codingProfiles = [
    {
      name: 'LeetCode',
      username: '231FA04591',
      url: 'https://leetcode.com/u/231FA04591/',
      icon: '⚡',
      description: 'Problem Solving & Algorithms',
      color: 'from-orange-500 to-yellow-500',
      stats: 'Problems Solved'
    },
    {
      name: 'CodeChef',
      username: 'sarvani_2027',
      url: 'https://www.codechef.com/users/sarvani_2027',
      icon: '🍳',
      description: 'Competitive Programming',
      color: 'from-purple-500 to-pink-500',
      stats: 'Contest Rating'
    },
    {
      name: 'HackerRank',
      username: 'patibandasarvani',
      url: 'https://www.hackerrank.com/patibandasarvani',
      icon: '🎯',
      description: 'Coding Challenges',
      color: 'from-green-500 to-emerald-500',
      stats: 'Certificates'
    }
  ];

  return (
    <section
      id="coding-profiles"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Coding Profiles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My competitive programming and problem-solving journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className={`block p-6 rounded-xl shadow-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              } border-2 ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`text-5xl mb-4 inline-block bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                >
                  {profile.icon}
                </motion.div>

                {/* Platform Name */}
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {profile.name}
                </h3>

                {/* Username */}
                <div className={`text-sm font-medium mb-3 px-3 py-1 rounded-full ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  @{profile.username}
                </div>

                {/* Description */}
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {profile.description}
                </p>

                {/* Stats Placeholder */}
                <div className={`text-xs font-medium px-3 py-2 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'
                }`}>
                  View {profile.stats} →
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${profile.color} opacity-10 pointer-events-none`}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`mt-12 p-6 rounded-xl text-center ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg border-2 ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center justify-center space-x-4 mb-3">
            <span className="text-3xl">🏆</span>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Competitive Programming Enthusiast
            </h3>
            <span className="text-3xl">🎯</span>
          </div>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Actively solving problems and improving algorithmic skills on multiple platforms
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
