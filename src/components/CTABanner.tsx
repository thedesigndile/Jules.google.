import Link from 'next/link';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="py-20 bg-indigo-600 dark:bg-indigo-800 rounded-lg my-10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Bring Your Book to Life?
        </h2>
        <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
          Let's collaborate to create a design that your readers will love. Get in touch with us today to start the conversation.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/contact" legacyBehavior>
            <a className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
