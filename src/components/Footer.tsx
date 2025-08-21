import Link from 'next/link';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
];

const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-serif font-bold">Design Dile</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Crafting beautiful book designs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {pageLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} legacyBehavior>
                    <a className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors">{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent-light dark:hover:text-accent-dark transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Design Dile. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
