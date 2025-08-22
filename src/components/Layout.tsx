import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import AIChatbot from './AIChatbot'; // Import the chatbot
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
      <AIChatbot /> {/* Add the chatbot here */}
    </div>
  );
};

export default Layout;
