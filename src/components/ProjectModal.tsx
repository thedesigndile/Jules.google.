import { motion } from 'framer-motion';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    description: string;
  };
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.2, type: 'spring', stiffness: 120 }
  },
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        variants={modal}
        className="bg-white dark:bg-secondary rounded-lg max-w-4xl w-full mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on modal content
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition"
            aria-label="Close project details"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
            <div>
              <Image src={project.imageUrl} alt={project.title} width={1200} height={600} className="object-cover" />
              <p className="legend">{project.title} - Cover</p>
            </div>
            {/* Add more images here for a real carousel */}
            <div>
              <Image src={project.imageUrl.replace('w=600', 'w=1200&h=600&fit=crop&crop=entropy&q=85')} alt={project.title} width={1200} height={600} className="object-cover" />
              <p className="legend">{project.title} - Full View</p>
            </div>
          </Carousel>
        </div>
        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2 text-light-text dark:text-dark-text">{project.title}</h2>
          <p className="text-sm font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-4">{project.category}</p>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const XMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default ProjectModal;
