import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
  };
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-48 w-48 mx-auto mb-4">
        <Image
          src={member.imageUrl}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-2xl font-serif font-bold">{member.name}</h3>
      <p className="text-accent-light dark:text-accent-dark font-semibold">{member.role}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xs mx-auto">{member.bio}</p>
    </motion.div>
  );
};

export default TeamCard;
