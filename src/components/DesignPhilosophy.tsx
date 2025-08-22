"use client";

import { motion } from 'framer-motion';
import React from 'react';

// Custom SVG Icons - Defined before use
const IconElegance = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M18 17v4m-2-2h4m-8-4a3 3 0 100-6 3 3 0 000 6zM12 3v2m0 14v2m-7-9H3m18 0h-2m-5-5l-1.414-1.414M17.414 17.414L16 16m-8-8L6.586 6.586M16 8l-1.414-1.414" /></svg>;
const IconClarity = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const IconCollaboration = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const principles = [
  {
    icon: <IconElegance />,
    title: 'Elegance',
    description: 'We believe in the power of simplicity and sophistication.'
  },
  {
    icon: <IconClarity />,
    title: 'Clarity',
    description: 'Our designs are intuitive, readable, and purpose-driven.'
  },
  {
    icon: <IconCollaboration />,
    title: 'Collaboration',
    description: 'We work with you to bring a shared vision to life.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const DesignPhilosophy = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800 relative">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p_philosophy" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M10 0v10h10" stroke="currentColor" strokeWidth="0.5" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(#p_philosophy)"/></svg>
        </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-serif mb-12">Our Design Philosophy</h2>
        <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={itemVariants} className="p-8">
              <div className="flex justify-center text-accent-light dark:text-accent-dark mb-4">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold">{principle.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Custom SVG Icons
const IconElegance = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M18 17v4m-2-2h4m-8-4a3 3 0 100-6 3 3 0 000 6zM12 3v2m0 14v2m-7-9H3m18 0h-2m-5-5l-1.414-1.414M17.414 17.414L16 16m-8-8L6.586 6.586M16 8l-1.414-1.414" /></svg>;
const IconClarity = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const IconCollaboration = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.122-1.28-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.122-1.28.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export default DesignPhilosophy;
