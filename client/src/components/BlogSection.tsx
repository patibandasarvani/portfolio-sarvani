import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BlogSection: React.FC = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'A comprehensive guide to understanding and implementing React Hooks in your applications.',
      category: 'React',
      readTime: '5 min',
      date: '2024-01-15',
      image: '🪝',
      featured: true
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Learn how to create beautiful, responsive designs using Tailwind CSS utility classes.',
      category: 'CSS',
      readTime: '7 min',
      date: '2024-01-10',
      image: '🎨'
    },
    {
      id: 3,
      title: 'JavaScript ES6+ Features You Should Know',
      excerpt: 'Explore modern JavaScript features that will make your code more efficient and readable.',
      category: 'JavaScript',
      readTime: '8 min',
      date: '2024-01-05',
      image: '⚡'
    },
    {
      id: 4,
      title: 'Introduction to Machine Learning',
      excerpt: 'A beginner-friendly introduction to the fundamentals of machine learning and AI.',
      category: 'ML',
      readTime: '10 min',
      date: '2023-12-28',
      image: '🤖'
    },
    {
      id: 5,
      title: 'Debugging Tips for Frontend Developers',
      excerpt: 'Essential debugging techniques and tools every frontend developer should master.',
      category: 'Debugging',
      readTime: '6 min',
      date: '2023-12-20',
      image: '🔍'
    },
    {
      id: 6,
      title: 'Web Performance Optimization',
      excerpt: 'Learn how to optimize your web applications for better performance and user experience.',
      category: 'Performance',
      readTime: '9 min',
      date: '2023-12-15',
      image: '⚡'
    }
  ];

  const categories = ['All', 'React', 'CSS', 'JavaScript', 'ML', 'Debugging', 'Performance'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section
      id="blog"
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
            Blog & Articles
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Sharing my knowledge and experiences
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Featured Article
            </h3>
            <div className={`p-8 rounded-2xl shadow-xl ${
              darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'
            }`}>
              <div className="flex flex-col md:flex-row items-center md:items-start space-x-6">
                <div className="text-6xl mb-4 md:mb-0">{featuredPosts[0].image}</div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                    <span className={`px-3 py-1 text-xs rounded-full bg-yellow-500 text-white`}>
                      Featured
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {featuredPosts[0].readTime} read
                    </span>
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {featuredPosts[0].title}
                  </h4>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {featuredPosts[0].excerpt}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700"
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-xl shadow-lg ${
                darkMode ? 'bg-gray-700 hover:bg-gray-650' : 'bg-white hover:bg-gray-50'
              } transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{post.image}</div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  {post.category}
                </span>
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {post.title}
              </h3>
              
              <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {post.readTime} read
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
