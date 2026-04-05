import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SkillRadar: React.FC = () => {
  const { darkMode } = useTheme();
  const [animationProgress, setAnimationProgress] = useState(0);

  const skills = [
    { name: 'React', level: 85, color: '#61DAFB' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Node.js', level: 70, color: '#339933' },
    { name: 'Python', level: 80, color: '#3776AB' },
    { name: 'CSS', level: 85, color: '#1572B6' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationProgress(1), 500);
    return () => clearTimeout(timer);
  }, []);

  const createRadarPoints = () => {
    const centerX = 150;
    const centerY = 150;
    const radius = 100;
    const angleStep = (Math.PI * 2) / skills.length;

    return skills.map((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius * (skill.level / 100);
      const y = centerY + Math.sin(angle) * radius * (skill.level / 100);
      return { x, y, skill };
    });
  };

  const radarPoints = createRadarPoints();
  const polygonPoints = radarPoints.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <svg width="300" height="300" className="transform -rotate-90">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level, index) => (
            <circle
              key={level}
              cx="150"
              cy="150"
              r={level}
              fill="none"
              stroke={darkMode ? '#374151' : '#E5E7EB'}
              strokeWidth="1"
              opacity={0.3}
            />
          ))}

          {/* Radar lines */}
          {skills.map((_, index) => {
            const angle = (index * 360 / skills.length) - 90;
            const x2 = 150 + 100 * Math.cos(angle * Math.PI / 180);
            const y2 = 150 + 100 * Math.sin(angle * Math.PI / 180);
            return (
              <line
                key={index}
                x1="150"
                y1="150"
                x2={x2}
                y2={y2}
                stroke={darkMode ? '#374151' : '#E5E7EB'}
                strokeWidth="1"
                opacity={0.3}
              />
            );
          })}

          {/* Skill polygon */}
          <motion.polygon
            points={polygonPoints}
            fill="url(#gradient)"
            fillOpacity={0.3}
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Skill points */}
          {radarPoints.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill={point.skill.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            />
          ))}
        </svg>

        {/* Skill labels */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {skills.map((skill, index) => {
              const angle = (index * 360 / skills.length) - 90;
              const labelRadius = 120;
              const x = 150 + labelRadius * Math.cos(angle * Math.PI / 180);
              const y = 150 + labelRadius * Math.sin(angle * Math.PI / 180);
              
              return (
                <motion.div
                  key={skill.name}
                  className="absolute text-sm font-medium"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <div className={`${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {skill.name}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.level}%
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillRadar;
