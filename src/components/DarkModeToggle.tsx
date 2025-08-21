"use client";

import { useDarkMode } from '@/lib/context/DarkModeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-300 rounded-full dark:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">Toggle dark mode</span>
      <motion.span
        initial={false}
        animate={{ x: isDarkMode ? 18 : -2 }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className="absolute left-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
      >
        {isDarkMode ? (
          <MoonIcon className="w-4 h-4 text-gray-800" />
        ) : (
          <SunIcon className="w-4 h-4 text-yellow-500" />
        )}
      </motion.span>
    </button>
  );
};

// You'll need to install @heroicons/react for this to work:
// npm install @heroicons/react
// However, to avoid asking the user to do it, I'll define the icons as simple SVGs.
// This is a workaround for the current environment.

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 01-1.06 0l-1.59-1.591a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.061zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM6.106 17.894a.75.75 0 010-1.06l1.59-1.59a.75.75 0 111.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM6.106 6.106a.75.75 0 011.06 0l1.591 1.59a.75.75 0 01-1.06 1.06L6.106 7.167a.75.75 0 010-1.06z" />
  </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.472-.69a.75.75 0 01.819.162l.805.805a.75.75 0 01-.059 1.064a10.5 10.5 0 11-9.233-12.54l.805.805a.75.75 0 011.064-.059z" clipRule="evenodd" />
  </svg>
);

export default DarkModeToggle;
