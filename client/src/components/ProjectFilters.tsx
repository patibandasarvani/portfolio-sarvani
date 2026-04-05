import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../types';

interface ProjectFiltersProps {
  projects: Project[];
  onFilter: (filteredProjects: Project[]) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ projects, onFilter }) => {
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const allTechnologies = projects.reduce((techs: string[], project) => {
    project.technologies.forEach(tech => {
      if (!techs.includes(tech)) {
        techs.push(tech);
      }
    });
    return techs;
  }, []);

  const filters = ['All', 'Featured', ...allTechnologies.slice(0, 6)];

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    
    let filtered = projects;
    
    if (filter === 'Featured') {
      filtered = projects.filter(project => project.featured);
    } else if (filter !== 'All') {
      filtered = projects.filter(project => 
        project.technologies.includes(filter)
      );
    }
    
    onFilter(filtered);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => handleFilter(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeFilter === filter
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
              : darkMode
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilters;
