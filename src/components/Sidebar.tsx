import Link from 'next/link';
import { useMemo } from 'react';

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
}

interface SidebarProps {
  posts: Post[];
  onSearch: (term: string) => void;
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const Sidebar = ({ posts, onSearch, onCategorySelect, activeCategory }: SidebarProps) => {
  const categories = useMemo(() => ['All', ...Array.from(new Set(posts.map(p => p.category)))], [posts]);
  const recentPosts = useMemo(() => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4), [posts]);

  return (
    <aside className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4 border-b pb-2 text-light-text dark:text-dark-text">Search</h3>
        <input
          type="text"
          placeholder="Search posts..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg dark:bg-accent dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Categories Widget */}
      <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4 border-b pb-2 text-light-text dark:text-dark-text">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <button
                onClick={() => onCategorySelect(category)}
                className={`w-full text-left hover:text-indigo-500 transition-colors ${
                  activeCategory === category ? 'text-indigo-600 font-bold' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white dark:bg-secondary p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4 border-b pb-2 text-light-text dark:text-dark-text">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
