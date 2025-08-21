"use client";

import { useDarkMode } from '@/lib/context/DarkModeContext';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="w-14 h-7 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1"
      aria-label="Toggle dark mode"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {/* Sun/Moon icon can be placed here if desired */}
      </motion.div>
      <style jsx>{`
        button[aria-label='Toggle dark mode'] div {
          transform: translateX(${isDarkMode ? '28px' : '0px'});
        }
      `}</style>
    </button>
  );
};

export default DarkModeToggle;
