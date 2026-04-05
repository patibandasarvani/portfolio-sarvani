import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SocialShare: React.FC = () => {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Check out Patibanda Sarvani\'s portfolio!';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`fixed bottom-6 right-6 z-40`}
    >
      <div className="flex flex-col items-center space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={copyToClipboard}
            className={`w-12 h-12 rounded-full ${
              copied 
                ? 'bg-green-500 text-white' 
                : darkMode 
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
            } shadow-lg transition-colors`}
            title="Copy link"
          >
            {copied ? '✓' : '🔗'}
          </motion.button>
          
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full mb-2 px-3 py-1 bg-green-500 text-white text-xs rounded-lg whitespace-nowrap"
            >
              Link copied!
            </motion.div>
          )}
        </motion.div>

        {shareLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-full ${link.color} text-white shadow-lg transition-colors flex items-center justify-center`}
            title={`Share on ${link.name}`}
          >
            <span className="text-xl">{link.icon}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialShare;
