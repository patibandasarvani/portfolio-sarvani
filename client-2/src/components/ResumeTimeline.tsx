import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ResumeTimeline: React.FC = () => {
  const { darkMode } = useTheme();

  const timelineEvents = [
    {
      date: '2025',
      title: 'Expected Graduation',
      description: 'Bachelor of Computer Science',
      type: 'education',
      icon: '🎓'
    },
    {
      date: '2024',
      title: 'Frontend Developer Intern',
      description: 'Tech Company - Built React applications',
      type: 'work',
      icon: '💼'
    },
    {
      date: '2023',
      title: 'Hackathon Winner',
      description: 'First place in university tech competition',
      type: 'achievement',
      icon: '🏆'
    },
    {
      date: '2022',
      title: 'Started Computer Science',
      description: 'Began academic journey',
      type: 'education',
      icon: '📚'
    }
  ];

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`} />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-center mb-8"
        >
          {/* Timeline Dot */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`absolute left-6 w-4 h-4 rounded-full z-10 ${
              event.type === 'education' 
                ? 'bg-blue-500' 
                : event.type === 'work'
                ? 'bg-green-500'
                : 'bg-purple-500'
            }`}
          />

          {/* Content Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className={`ml-16 p-6 rounded-lg shadow-lg cursor-pointer ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">{event.icon}</span>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {event.title}
                </h4>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {event.date}
                </span>
              </div>
            </div>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {event.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ResumeTimeline;
