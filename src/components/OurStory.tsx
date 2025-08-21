import Image from 'next/image';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text dark:text-dark-text">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Design Dile was born from a simple idea: that every author, big or small, deserves a beautiful book that does their story justice. Our founder, Eleanor Vance, a veteran of the publishing world, saw a gap between talented authors and the high-quality design services they needed to compete.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Starting in a small studio in 2018, we've grown into a passionate team of designers, illustrators, and typographers, all dedicated to the art of book design. We've had the privilege of working on hundreds of projects, from debut novels to international bestsellers, but our mission remains the same: to craft designs that captivate readers and honor the words within.
            </p>
          </motion.div>
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
              alt="The Design Dile team collaborating"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
