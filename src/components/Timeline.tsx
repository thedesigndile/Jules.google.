"use client";

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2018',
    title: 'The Spark of an Idea',
    description: 'Our founder, Eleanor Vance, leaves her job at a major publishing house to start a design studio focused on quality and collaboration.'
  },
  {
    year: '2019',
    title: 'First Bestseller',
    description: 'We design the cover for "The Silent Forest," which goes on to become a New York Times bestseller, putting our studio on the map.'
  },
  {
    year: '2021',
    title: 'Expanding the Team',
    description: 'Marcus and Clara join the team, bringing their expertise in illustration and layout design. We move into our first official studio space.'
  },
  {
    year: '2023',
    title: 'Award-Winning Design',
    description: 'Our work on "The Chef\'s Table" wins a prestigious design award, recognizing our commitment to excellence and innovation.'
  },
];

const TimelineItem = ({ event, isLast }: { event: any, isLast: boolean }) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-8">
        <motion.div
          className="w-4 h-4 bg-accent-light dark:bg-accent-dark rounded-full border-2 border-light-bg dark:border-dark-bg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        />
        {!isLast && <div className="w-0.5 h-48 bg-gray-300 dark:bg-gray-700" />}
      </div>
      <motion.div
        className="pb-16"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg font-bold text-accent-light dark:text-accent-dark">{event.year}</p>
        <h3 className="text-2xl font-serif font-bold mt-1">{event.title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{event.description}</p>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16">Our Journey</h2>
        <div>
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} isLast={index === timelineEvents.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
