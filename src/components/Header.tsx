"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
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

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm' : 'bg-light-bg dark:bg-dark-bg'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-serif font-bold text-light-text dark:text-dark-text">
            Design Dile
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} legacyBehavior>
              <a className="relative text-light-text dark:text-dark-text hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                {link.name}
                <motion.div
                  className="absolute bottom-[-4px] left-0 h-0.5 bg-accent-light dark:bg-accent-dark"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Link>
          ))}
          <DarkModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="z-50 relative">
            <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text mt-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-light-text dark:bg-dark-text mt-1 transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-light-bg dark:bg-dark-bg flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} legacyBehavior>
                <a onClick={() => setIsOpen(false)} className="text-3xl font-serif text-light-text dark:text-dark-text">{link.name}</a>
              </Link>
            ))}
            <DarkModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
