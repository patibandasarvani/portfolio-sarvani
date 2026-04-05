import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../types';
import ProjectFilters from './ProjectFilters';

const Projects: React.FC = () => {
  const { darkMode } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const demoProjects: Project[] = [
    {
      _id: '1',
      title: 'Campus Connect - Student Platform',
      description: 'A comprehensive student platform connecting campus resources, events, and communities. Features include event management, resource sharing, and student networking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
      githubLink: 'https://github.com/patibandasarvani',
      liveLink: 'https://campus-connect-f6er0mt02-patibandasarvanis-projects.vercel.app',
      featured: true,
      createdAt: new Date().toISOString()
    },
    {
      _id: '2',
      title: 'Online Examination Portal',
      description: 'Developed a secure full-stack examination system supporting MCQs and coding-based assessments with role-based access, auto-grading, and timed submissions using the MERN stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
      githubLink: 'https://github.com/patibandasarvani',
      featured: true,
      createdAt: new Date().toISOString()
    },
    {
      _id: '3',
      title: 'Music Mantra – Online Music Platform',
      description: 'Built a role-based music streaming platform using Flask, MySQL, HTML, CSS, and JavaScript with secure backend management and a responsive user interface.',
      technologies: ['Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/patibandasarvani',
      featured: false,
      createdAt: new Date().toISOString()
    },
    {
      _id: '4',
      title: 'AI Chatbot & Game Applications',
      description: 'Developed an AI chatbot and a Rock-Paper-Scissors game using Flask and MySQL with interactive user interfaces and intelligent responses.',
      technologies: ['Flask', 'MySQL', 'AI', 'Python'],
      githubLink: 'https://github.com/patibandasarvani',
      featured: false,
      createdAt: new Date().toISOString()
    }
  ];
    
    setProjects(demoProjects);
    setFilteredProjects(demoProjects);
    setLoading(false);
  }, []);

  const handleFilter = (filtered: Project[]) => {
    setFilteredProjects(filtered);
  };

  if (loading) {
    return (
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6 text-center">
          <div className={`text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}>Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <ProjectFilters projects={projects} onFilter={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  Featured Project
                </div>
              )}
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode 
                          ? 'bg-blue-900 text-blue-200' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 px-4 rounded-lg border ${
                        darkMode 
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-600' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            More projects coming soon! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
