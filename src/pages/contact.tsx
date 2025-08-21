import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us - Design Dile</title>
        <meta name="description" content="Get in touch with Design Dile to discuss your book design project." />
      </Head>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-4">Let's Create Together</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mt-16 items-start">
            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-lg border border-gray-200 dark:border-gray-800">
              <ContactForm />
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-serif mb-4">Contact Details</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Email:</strong> <a href="mailto:contact@designdile.com" className="hover:text-accent-light dark:hover:text-accent-dark">contact@designdile.com</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Phone:</strong> <a href="tel:+1234567890" className="hover:text-accent-light dark:hover:text-accent-dark">(123) 456-7890</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Studio:</strong><br />
                123 Design Lane,<br />
                Booksville, BK 12345
              </p>

              <h3 className="text-2xl font-serif mt-8 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                 <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark">Instagram</a>
                 <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark">Twitter</a>
                 <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
