import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const { darkMode } = useTheme();

  const skills = [
    { name: 'C', level: 85, category: 'Programming', icon: '🔷' },
    { name: 'Java', level: 50, category: 'Programming', icon: '☕' },
    { name: 'Python', level: 80, category: 'Programming', icon: '🐍' },
    { name: 'HTML', level: 90, category: 'Frontend', icon: '🌐' },
    { name: 'CSS', level: 85, category: 'Frontend', icon: '🎨' },
    { name: 'JavaScript', level: 80, category: 'Frontend', icon: '⚡' },
    { name: 'React', level: 80, category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', level: 80, category: 'Backend', icon: '🟢' },
    { name: 'Express', level: 50, category: 'Backend', icon: '🚂' },
    { name: 'MySQL', level: 80, category: 'Database', icon: '🗄️' },
    { name: 'MongoDB', level: 50, category: 'Database', icon: '🍃' },
    { name: 'Data Structures (DS)', level: 50, category: 'Concepts', icon: '🌳' },
    { name: 'OOPs', level: 85, category: 'Concepts', icon: '🔧' },
    { name: 'DBMS', level: 75, category: 'Concepts', icon: '💾' },
    { name: 'Operating Systems', level: 70, category: 'Concepts', icon: '💻' }
  ];

  const categories = ['Programming', 'Frontend', 'Backend', 'Database', 'Concepts'];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {category}
              </h3>
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + index * 0.05 + 0.2,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
