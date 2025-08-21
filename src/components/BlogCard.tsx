import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    category: string;
    author: string;
    date: string;
    excerpt: string;
    imageUrl: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.div
      className="blog-card bg-white dark:bg-secondary rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5, boxShadow: '0px 15px 30px rgba(0,0,0,0.1)' }}
    >
      <Link href={`/blog/${post.slug}`} legacyBehavior>
        <a>
          <div className="relative h-56">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-2">{post.category}</p>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <span>By {post.author}</span>
              <span className="mx-2">|</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="mt-4">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Read More &rarr;</span>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
