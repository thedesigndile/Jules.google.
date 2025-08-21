import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

// Placeholders for components to be created
// import OurStory from '@/components/OurStory';
// import MissionVision from '@/components/MissionVision';
// import Timeline from '@/components/Timeline';
// import TeamGrid from '@/components/TeamGrid';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Design Dile</title>
        <meta name="description" content="Learn about the story, mission, and talented team behind Design Dile." />
      </Head>

      {/* Hero Banner for About Page */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-light-text dark:text-dark-text">We Are The Storytellers' Best Friend</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          At Design Dile, we believe every great book deserves a great design.
        </p>
      </motion.section>

      {/* Placeholder for OurStory section */}
      <div className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Story Placeholder</h2>
      </div>

      {/* Placeholder for Mission/Vision section */}
      <div className="py-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Mission/Vision Placeholder</h2>
      </div>

      {/* Placeholder for Timeline section */}
      <div className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Timeline Placeholder</h2>
      </div>

      {/* Placeholder for TeamGrid section */}
      <div className="py-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team Placeholder</h2>
      </div>

    </Layout>
  );
};

export default AboutPage;
