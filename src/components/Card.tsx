import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
}

const Card = ({ href, imageUrl, title, description }: CardProps) => {
  return (
    <Link href={href} legacyBehavior>
      <motion.a
        className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group"
        whileHover={{ y: -8, boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative h-56">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-light-text dark:text-dark-text">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </motion.a>
    </Link>
  );
};

export default Card;
