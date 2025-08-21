import Layout from '@/components/Layout';
import Head from 'next/head';
import PortfolioGallery from '@/components/PortfolioGallery';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <Layout>
      <Head>
        <title>Our Portfolio - Design Dile</title>
        <meta name="description" content="Browse our portfolio of book cover designs, interior layouts, and custom illustrations." />
      </Head>

      {/* Hero Banner for Portfolio Page */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-light-text dark:text-dark-text">Our Creative Work</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A collection of our favorite projects. Each one is a story we've had the pleasure to help tell.
        </p>
      </motion.section>

      {/* The PortfolioGallery component will be updated to include filtering */}
      <PortfolioGallery />

    </Layout>
  );
};

export default PortfolioPage;
