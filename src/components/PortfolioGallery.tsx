"use client";

import { useState, useMemo } from 'react';
import PortfolioCard from './PortfolioCard';
import projectsData from '@/data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// import ProjectModal from './ProjectModal'; // Will be uncommented later

interface PortfolioGalleryProps {
  isPreview?: boolean;
}

const PortfolioGallery = ({ isPreview = false }: PortfolioGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(projectsData.map(p => p.category)))], []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const projectsToShow = isPreview ? filteredProjects.slice(0, 4) : filteredProjects;

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-accent">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Our Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {isPreview ? 'Here’s a glimpse of the stories we’ve helped tell.' : 'Explore our curated collection of designs.'}
          </p>
        </div>

        {!isPreview && (
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-secondary text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {projectsToShow.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <PortfolioCard project={project} onClick={() => openModal(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {isPreview && (
          <div className="mt-12 text-center">
            <Link href="/portfolio" legacyBehavior>
              <a className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105">
                View Full Portfolio
              </a>
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
