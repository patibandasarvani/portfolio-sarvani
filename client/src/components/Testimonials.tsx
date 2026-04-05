import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Testimonials: React.FC = () => {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Computer Science Professor',
      content: 'Sarvani demonstrates exceptional problem-solving skills and a deep understanding of frontend technologies. Her projects show creativity and technical excellence.',
      rating: 5,
      avatar: '👩‍🏫'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Developer at Tech Corp',
      content: 'Working with Sarvani was a great experience. She brings fresh ideas to the table and has a remarkable ability to turn complex requirements into elegant solutions.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      content: 'Sarvani has an excellent eye for design and user experience. Her attention to detail and commitment to creating user-friendly interfaces is impressive.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
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
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            What people say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-2xl shadow-xl ${
                darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              <blockquote className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonials[activeIndex].content}"
              </blockquote>
            </motion.div>

            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeIndex
                        ? 'bg-blue-500'
                        : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition-colors`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
