import { motion } from 'framer-motion';
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    transition: { type: 'spring', stiffness: 300 }
  }
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="p-8 bg-white dark:bg-secondary rounded-lg shadow-md text-center"
    >
      <div className="flex justify-center items-center mb-4 text-indigo-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
