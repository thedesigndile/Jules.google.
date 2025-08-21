"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonials from '@/data/testimonials.json';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const TestimonialCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const testimonialIndex = page % testimonials.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-light-text dark:text-dark-text">What Our Clients Say</h2>
        <div className="relative h-64 md:h-48 flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-3xl px-10"
            >
              <p className="text-lg italic text-gray-700 dark:text-gray-300">"{testimonials[testimonialIndex].quote}"</p>
              <p className="mt-4 font-bold text-light-text dark:text-dark-text">{testimonials[testimonialIndex].name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[testimonialIndex].company}</p>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition">
              <ChevronLeftIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={() => paginate(1)} className="p-2 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition">
              <ChevronRightIcon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > testimonialIndex ? 1 : -1])}
                className={`w-3 h-3 rounded-full ${testimonialIndex === i ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

// Inlined SVG icons to avoid dependency
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);
const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export default TestimonialCarousel;
