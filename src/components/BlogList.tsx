"use client";

import { useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Post {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

interface BlogListProps {
  posts: Post[];
}

const BlogList = ({ posts }: BlogListProps) => {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) {
      // Kill previous ScrollTriggers to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      gsap.fromTo(
        (el as HTMLElement).querySelectorAll('.blog-card'),
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      );
    }
  }, [posts]); // Rerun animation when posts change (e.g., due to filtering)

  if (posts.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No posts found.</p>;
  }

  return (
    <div ref={listRef} className="space-y-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
