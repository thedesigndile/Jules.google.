import Layout from '@/components/Layout';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import projects from '@/data/projects.json';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Cover Design',
    description: 'Captivating covers that tell a story.',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800',
    href: '/contact',
  },
  {
    title: 'Interior Layout',
    description: 'Readable and elegant page formatting.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800',
    href: '/contact',
  },
  {
    title: 'Illustration',
    description: 'Custom artwork to bring your vision to life.',
    imageUrl: 'https://images.unsplash.com/photo-1542826438-c32144d126b4?q=80&w=800',
    href: '/contact',
  },
];

const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)">
          <rect x="0" y="0" width="100%" height="100%" fill="none"/>
          <path d="M10 0v10h10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)"/>
    </svg>
  </div>
);

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Design Dile - Elegant Book Design</title>
      </Head>

      <Hero />

      <section className="py-20 relative">
        <BackgroundPattern />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-serif text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
              <Card key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-12">Latest Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map(project => (
              <Card key={project.id} {...project} href="/portfolio" />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" legacyBehavior>
              <a className="font-bold text-accent-light dark:text-accent-dark hover:underline">
                View All Projects &rarr;
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 text-center relative">
        <BackgroundPattern />
        <div className="relative z-10">
          <h2 className="text-3xl font-serif mb-4">Ready to create something beautiful?</h2>
          <Link href="/contact" legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 px-8 py-3 bg-accent-light text-white dark:bg-accent-dark dark:text-dark-bg font-bold rounded-full shadow-lg"
            >
              Get in Touch
            </motion.a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
