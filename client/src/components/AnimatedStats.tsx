import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedStats: React.FC = () => {
  const { darkMode } = useTheme();
  const [counters, setCounters] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    achievements: 0
  });

  const stats = [
    { key: 'projects', label: 'Projects Completed', target: 15, icon: '🚀', color: 'from-blue-500 to-cyan-500' },
    { key: 'skills', label: 'Technical Skills', target: 8, icon: '⚡', color: 'from-purple-500 to-pink-500' },
    { key: 'experience', label: 'Months Experience', target: 12, icon: '💼', color: 'from-green-500 to-emerald-500' },
    { key: 'achievements', label: 'Achievements', target: 6, icon: '🏆', color: 'from-orange-500 to-red-500' }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let allComplete = true;

        stats.forEach(stat => {
          const current = newCounters[stat.key as keyof typeof counters];
          const target = stat.target;
          const increment = target / steps;

          if (current < target) {
            newCounters[stat.key as keyof typeof counters] = Math.min(current + increment, target);
            allComplete = false;
          } else {
            newCounters[stat.key as keyof typeof counters] = target;
          }
        });

        if (allComplete) {
          clearInterval(interval);
        }

        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className={`p-6 rounded-xl shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="text-center">
            <div className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.icon}
            </div>
            <motion.div
              className={`text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {Math.round(counters[stat.key as keyof typeof counters])}
            </motion.div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedStats;
