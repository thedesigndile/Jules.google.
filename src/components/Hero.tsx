import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-light-text dark:text-dark-text leading-tight">
            Design for the Written Word.
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            We create beautiful, elegant book covers and layouts that honor your story and captivate your readers.
          </p>
          <Link href="/portfolio" legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-3 bg-accent-light text-white dark:bg-accent-dark dark:text-dark-bg font-bold rounded-full shadow-lg"
            >
              View Our Work
            </motion.a>
          </Link>
        </motion.div>
        <motion.div
          className="relative h-96 float-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1519682337058-e9941a192e53?q=80&w=800"
            alt="An elegant book cover"
            layout="fill"
            objectFit="contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
