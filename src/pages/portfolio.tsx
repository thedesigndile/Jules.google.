import { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Card from '@/components/Card';
import projects from '@/data/projects.json';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <Layout>
      <Head>
        <title>Portfolio - Design Dile</title>
        <meta name="description" content="A curated collection of our finest book design projects." />
      </Head>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-serif text-center mb-4">Our Work</h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A selection of projects that showcase our passion for design and storytelling.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} onClick={() => openModal(project)}>
                 <Card
                    href="#" // Href is disabled as click opens modal
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                 />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-light-bg dark:bg-dark-bg p-8 rounded-lg max-w-2xl w-full"
            >
              <h2 className="text-3xl font-serif">{selectedProject.title}</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{selectedProject.description}</p>
              <button onClick={closeModal} className="mt-6 px-6 py-2 bg-accent-light text-white dark:bg-accent-dark dark:text-dark-bg font-bold rounded-full">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PortfolioPage;
