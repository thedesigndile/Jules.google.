import Image from 'next/image';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  project: {
    imageUrl: string;
    title: string;
    category: string;
  };
  onClick: () => void;
}

const cardVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.03 }
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 }
};

const PortfolioCard = ({ project, onClick }: PortfolioCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      layoutId={`card-container-${project.title}`} // For animated modal
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={400}
        height={300}
        className="object-cover w-full h-full"
        loading="lazy"
      />
      <motion.div
        variants={overlayVariants}
        initial="initial"
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-4"
      >
        <motion.h3
          className="text-xl font-bold text-white text-center"
          layoutId={`card-title-${project.title}`}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-300"
          layoutId={`card-category-${project.title}`}
        >
          {project.category}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioCard;
