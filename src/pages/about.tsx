import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import DesignPhilosophy from '@/components/DesignPhilosophy';
import TeamCard from '@/components/TeamCard';
import team from '@/data/team.json';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Us - Design Dile</title>
        <meta name="description" content="Learn about the story, mission, and talented team behind Design Dile." />
      </Head>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 bg-light-bg dark:bg-dark-bg"
      >
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-light-text dark:text-dark-text">
          We believe design is storytelling.
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Our journey is one of passion for the written word and the art that brings it to life.
        </p>
      </motion.section>

      <Timeline />

      <DesignPhilosophy />

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-16">Meet the Artisans</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default AboutPage;
