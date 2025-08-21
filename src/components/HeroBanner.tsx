import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingBooks from './FloatingBooks';
import { Suspense } from 'react';

const HeroBanner = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gray-200 dark:bg-gray-800" />}>
          <FloatingBooks />
        </Suspense>
      </div>

      <div className="relative z-10 p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold font-serif text-light-text dark:text-dark-text"
        >
          Where Your Story Gets Its Cover
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
        >
          We craft compelling book designs that capture the essence of your writing and entice readers from the first glance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Link href="/portfolio" legacyBehavior>
            <a className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
              Explore Our Work
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
