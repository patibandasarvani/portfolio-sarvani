import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const InteractiveResume: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [isExpanded, setIsExpanded] = useState(false);
  const [skillLevel, setSkillLevel] = useState(0);

  const sections = [
    { id: 'about', title: 'About Me', icon: '👤', color: 'from-blue-500 to-cyan-500' },
    { id: 'education', title: 'Education', icon: '🎓', color: 'from-purple-500 to-pink-500' },
    { id: 'skills', title: 'Skills', icon: '⚡', color: 'from-green-500 to-emerald-500' },
    { id: 'projects', title: 'Projects', icon: '🚀', color: 'from-orange-500 to-red-500' },
    { id: 'experience', title: 'Experience', icon: '💼', color: 'from-indigo-500 to-blue-500' }
  ];

  const skills = [
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Express', level: 75, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Programming' },
    { name: 'Java', level: 75, category: 'Programming' },
    { name: 'C', level: 85, category: 'Programming' },
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 85, category: 'Frontend' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' }
  ];

  const education = [
    {
      degree: 'B.Tech – Computer Science and Engineering',
      institution: 'Vignan\'s Foundation for Science, Technology and Research, Guntur',
      period: '2023 – 2027',
      gpa: 'CGPA: 7.61',
      achievements: ['Dean\'s List', 'Top Performer']
    },
    {
      degree: 'Intermediate – MPC',
      institution: 'Narayana Junior College, Guntur',
      period: '2021 – 2023',
      gpa: 'Percentage: 93.4%',
      achievements: ['Academic Excellence']
    },
    {
      degree: 'SSC',
      institution: 'SPIMS School, Krosur',
      period: '2020 – 2021',
      gpa: 'Percentage: 100%',
      achievements: ['Perfect Score', 'School Topper']
    }
  ];

  const projects = [
    {
      title: 'Online Examination Portal',
      description: 'Developed a secure full-stack examination system supporting MCQs and coding-based assessments with role-based access, auto-grading, and timed submissions using the MERN stack.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
      highlight: '⭐ Featured'
    },
    {
      title: 'Music Mantra – Online Music Platform',
      description: 'Built a role-based music streaming platform using Flask, MySQL, HTML, CSS, and JavaScript with secure backend management and a responsive user interface.',
      tech: ['Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      highlight: '🔥 Popular'
    },
    {
      title: 'AI Chatbot & Game Applications',
      description: 'Developed an AI chatbot and a Rock-Paper-Scissors game using Flask and MySQL with interactive user interfaces.',
      tech: ['Flask', 'MySQL', 'AI', 'Python'],
      highlight: '🤖 AI Powered'
    }
  ];

  useEffect(() => {
    if (activeSection === 'skills') {
      const timer = setTimeout(() => setSkillLevel(1), 100);
      return () => clearTimeout(timer);
    } else {
      setSkillLevel(0);
    }
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              About Me
            </h3>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Passionate Computer Science Engineering student with strong academic foundation (CGPA: 7.61) and 
                practical experience in full-stack development. Seeking to apply my programming skills in C, Java, Python, 
                and web technologies to contribute effectively to organizational growth while continuously enhancing 
                my technical expertise.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-2xl mb-2">📞</div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Contact
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    +91 88856 95798
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-2xl mb-2">📧</div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Email
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    patibandasarvani@gmail.com
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-2xl mb-2">�</div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Location
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Guntur, Andhra Pradesh
                  </div>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-2xl mb-2">🎯</div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Career Goal
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Challenging role in tech
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {edu.degree}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className={`text-right ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="font-semibold">{edu.period}</div>
                    <div className="text-sm">GPA: {edu.gpa}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      🏆 {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {skill.name}
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.category === 'Frontend' ? 'from-blue-500 to-cyan-500' : skill.category === 'Backend' ? 'from-green-500 to-emerald-500' : 'from-purple-500 to-pink-500'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level * skillLevel}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {skill.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Featured Projects
            </h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {project.title}
                    </h4>
                    <span className="text-sm">{project.highlight}</span>
                  </div>
                  <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'experience':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Experience & Certifications
            </h3>
            
            {/* Certifications */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🏆 Certifications
              </h4>
              <div className="space-y-3">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Preliminary English Test (PET – Level B1)
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Cambridge University
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    NPTEL Certification in Public Speaking
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    IIT Madras
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    NPTEL Certification in E-Business
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    IIT Kharagpur
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    NPTEL Certification in Principles of Management
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    IIT Madras
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                💡 Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management'].map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full ${
                      darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                🌍 Languages Known
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Telugu (Native)', 'English (Fluent)', 'Hindi (Basic)'].map((lang, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full ${
                      darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

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
            Interactive Resume
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Click on sections to explore my professional journey
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className={`sticky top-6 space-y-3`}>
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                        : darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{section.icon}</span>
                      <div>
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-xs opacity-75">
                          {activeSection === section.id ? 'Active' : 'Click to view'}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <span className="flex items-center space-x-2">
                    <span>📄</span>
                    <span>Download Full Resume (PDF)</span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveResume;
