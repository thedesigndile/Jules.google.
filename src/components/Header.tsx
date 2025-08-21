"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/80 dark:bg-primary/80 backdrop-blur-sm' : ''}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold font-serif text-light-text dark:text-dark-text">Design Dile</a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} legacyBehavior>
              <motion.a
                className="relative text-light-text dark:text-dark-text hover:text-indigo-500 dark:hover:text-indigo-400"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {link.name}
                <motion.div className="absolute bottom-0 left-0 h-0.5 bg-indigo-500 dark:bg-indigo-400" style={{width: 0}} whileHover={{width: "100%"}} transition={{duration: 0.3}}/>
              </motion.a>
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button onClick={toggleMenu} className="ml-4 text-light-text dark:text-dark-text">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden bg-white dark:bg-primary overflow-hidden"
      >
        <div className="px-6 pt-2 pb-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} legacyBehavior>
              <a onClick={() => setIsOpen(false)} className="block text-center text-light-text dark:text-dark-text hover:text-indigo-500 dark:hover:text-indigo-400 py-2">{link.name}</a>
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};


const Bars3Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const XMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default Header;
