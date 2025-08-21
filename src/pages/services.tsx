import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Placeholders for components to be created or extended
// import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';

const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Our Services - Design Dile</title>
        <meta name="description" content="Explore the wide range of book design services we offer, from cover design to interior formatting and illustration." />
      </Head>

      {/* Hero Banner for Services Page */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-light-text dark:text-dark-text">Our Design Services</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          We provide end-to-end design solutions to bring your book to life, ensuring it's beautiful inside and out.
        </p>
      </motion.section>

      <ServicesGrid />

      <WhyChooseUs />

    </Layout>
  );
};

export default ServicesPage;
