import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProfessionalResume: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedSkills, setAnimatedSkills] = useState(false);

  // Your exact data from resume
  const personalInfo = {
    name: 'PATIBANDA SARVANI',
    phone: '+91 88856 95798',
    email: 'patibandasarvani@gmail.com',
    location: 'Guntur, Andhra Pradesh',
    linkedin: 'linkedin.com/in/sarvani-patibanda-61877a2b5',
    github: 'github.com/patibandasarvani'
  };

  const careerObjective = 'Seeking a challenging role where I can apply my academic knowledge, programming skills, and problem-solving abilities to contribute effectively to organizational growth while continuously enhancing my technical expertise.';

  const education = [
    {
      degree: 'B.Tech – Computer Science and Engineering',
      institution: 'Vignan\'s Foundation for Science, Technology and Research, Guntur',
      period: '2023 – 2027',
      score: 'CGPA: 7.61',
      achievements: ['Dean\'s List Candidate']
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Narayana Junior College, Guntur',
      period: '2021 – 2023',
      score: 'Percentage: 93.4%',
      achievements: ['Academic Excellence']
    },
    {
      degree: 'SSC',
      institution: 'SPIMS School, Krosur',
      period: '2020 – 2021',
      score: 'Percentage: 100%',
      achievements: ['Perfect Score', 'School Topper']
    }
  ];

  const technicalSkills = {
    'Programming Languages': ['C', 'Java', 'Python'],
    'Web Technologies': ['HTML', 'CSS', 'React', 'Node.js', 'Express', 'JavaScript'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Eclipse'],
    'Core Concepts': ['Data Structures (DS)', 'OOPs', 'DBMS', 'Operating Systems']
  };

  const projects = [
    {
      title: 'Campus Connect - Student Platform',
      description: 'A comprehensive student platform connecting campus resources, events, and communities. Features include event management, resource sharing, and student networking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
      highlights: ['Event Management', 'Resource Sharing', 'Student Networking', 'Live Deployment'],
      liveLink: 'https://campus-connect-f6er0mt02-patibandasarvanis-projects.vercel.app'
    },
    {
      title: 'Online Examination Portal',
      description: 'Developed a secure full-stack examination system supporting MCQs and coding-based assessments with role-based access, auto-grading, and timed submissions using the MERN stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN Stack'],
      highlights: ['Role-based Access', 'Auto-grading System', 'Timed Submissions', 'Secure Authentication']
    },
    {
      title: 'Music Mantra – Online Music Platform',
      description: 'Built a role-based music streaming platform using Flask, MySQL, HTML, CSS, and JavaScript with secure backend management and a responsive user interface.',
      technologies: ['Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      highlights: ['Music Streaming', 'User Management', 'Responsive Design', 'Backend Security']
    },
    {
      title: 'Mini Applications',
      description: 'Developed an AI chatbot and a Rock-Paper-Scissors game using Flask and MySQL with interactive user interfaces.',
      technologies: ['Flask', 'MySQL', 'AI Integration', 'Python'],
      highlights: ['AI Chatbot', 'Interactive Game', 'Database Integration', 'User Interaction']
    }
  ];

  const certifications = [
    'Preliminary English Test (PET – Level B1), Cambridge University',
    'NPTEL Certification in Public Speaking',
    'NPTEL Certification in E-Business',
    'NPTEL Certification in Principles of Management'
  ];

  const softSkills = ['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management'];
  const languages = ['Telugu', 'English', 'Hindi'];

  useEffect(() => {
    if (activeTab === 'skills') {
      setTimeout(() => setAnimatedSkills(true), 500);
    } else {
      setAnimatedSkills(false);
    }
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                {personalInfo.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">📞</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">📧</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">📍</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{personalInfo.location}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">💼</span>
                    <a href={`https://${personalInfo.linkedin}`} className={darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}>
                      {personalInfo.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-500">🐱</span>
                    <a href={`https://${personalInfo.github}`} className={darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}>
                      {personalInfo.github}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🎯 Career Objective
              </h3>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {careerObjective}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="text-3xl mb-2">🎓</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>7.61</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>CGPA</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="text-3xl mb-2">🚀</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>3</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="text-3xl mb-2">📚</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>4</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certificates</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="text-3xl mb-2">⚡</div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>15+</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Skills</div>
              </div>
            </motion.div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border-l-4 ${
                  index === 0 ? 'border-blue-500' : index === 1 ? 'border-purple-500' : 'border-green-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {edu.period}
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {edu.score}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      🏆 {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      } hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg cursor-pointer`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  <span className="text-sm">🚀</span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded ${
                          darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                        }`}
                      >
                        ✨ {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🏆 Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                  >
                    <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      📜 {cert}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                💡 Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🌍 Languages Known
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' }
  ];

  return (
    <section
      id="resume"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Professional Resume
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Complete professional profile with accurate information
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all"
            >
              <span className="flex items-center space-x-2">
                <span>📄</span>
                <span>Download Resume (PDF)</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalResume;
