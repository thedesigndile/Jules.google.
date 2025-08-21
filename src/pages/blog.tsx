import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import BlogList from '@/components/BlogList';
import Sidebar from '@/components/Sidebar';
import allPosts from '@/data/blog.json';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return allPosts
      .filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(post =>
        activeCategory === 'All' ? true : post.category === activeCategory
      );
  }, [searchTerm, activeCategory]);

  return (
    <Layout>
      <Head>
        <title>Blog - Design Dile</title>
        <meta name="description" content="Insights, tips, and behind-the-scenes stories from the world of book design." />
      </Head>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-light-text dark:text-dark-text">The Design Dile Blog</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Insights, inspiration, and stories from our design studio.
        </p>
      </motion.section>

      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <main className="lg:col-span-2">
            <BlogList posts={filteredPosts} />
          </main>

          <aside className="lg:sticky top-24">
            <Sidebar
              posts={allPosts}
              onSearch={setSearchTerm}
              onCategorySelect={setActiveCategory}
              activeCategory={activeCategory}
            />
          </aside>

        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
