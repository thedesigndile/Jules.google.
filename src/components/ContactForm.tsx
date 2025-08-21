"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    console.log({ name, email, message });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <h3 className="text-2xl font-serif text-accent-light dark:text-accent-dark">Thank You!</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Your message has been sent. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-light-bg dark:bg-dark-bg focus:ring-accent-light focus:border-accent-light"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-light-bg dark:bg-dark-bg focus:ring-accent-light focus:border-accent-light"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-light-bg dark:bg-dark-bg focus:ring-accent-light focus:border-accent-light"
        />
      </div>
      <div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-accent-light text-white dark:bg-accent-dark dark:text-dark-bg font-bold rounded-full shadow-lg"
        >
          Send Message
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;
