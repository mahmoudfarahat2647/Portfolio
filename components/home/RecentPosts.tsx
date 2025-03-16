'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Category = 'Development' | 'Design' | 'Performance';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  thumbnail: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Building Modern Web Applications with Next.js and TypeScript',
    excerpt: 'Learn how to leverage the power of Next.js and TypeScript to create robust, type-safe web applications.',
    category: 'Development',
    date: '2025-03-15',
    readTime: '8 min read',
    author: {
      name: 'Alex Rivera',
      role: 'Senior Developer',
    },
    thumbnail: '/blog/nextjs-typescript.jpg' // We'll use a gradient background for now
  },
  {
    id: 2,
    title: 'Mastering CSS Grid: Advanced Layout Techniques',
    excerpt: 'Explore advanced CSS Grid techniques to create complex, responsive layouts with ease.',
    category: 'Design',
    date: '2025-03-12',
    readTime: '6 min read',
    author: {
      name: 'Maya Chen',
      role: 'UI Designer',
    },
    thumbnail: '/blog/css-grid.jpg'
  },
  {
    id: 3,
    title: 'Performance Optimization: Speed Up Your Website',
    excerpt: "Essential techniques and best practices for optimizing your website's performance and load times.",
    category: 'Performance',
    date: '2025-03-10',
    readTime: '10 min read',
    author: {
      name: 'James Wilson',
      role: 'Performance Engineer',
    },
    thumbnail: '/blog/performance.jpg'
  }
];

const categoryColors: Record<Category, string> = {
  Development: 'from-blue-500 to-indigo-600',
  Design: 'from-purple-500 to-pink-600',
  Performance: 'from-emerald-500 to-teal-600',
};

interface PostCardProps {
  post: Post;
  index: number;
}

function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div 
        className={`h-48 bg-gradient-to-br ${categoryColors[post.category]} relative`}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <Link 
            href={`/blog/category/${post.category.toLowerCase()}`}
            className="text-[var(--brand-primary)] hover:underline"
          >
            {post.category}
          </Link>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              {post.author.name.charAt(0)}
            </div>
            <div className="text-sm">
              <p className="text-gray-900 font-medium">{post.author.name}</p>
              <p className="text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <Link 
            href={`/blog/${post.id}`}
            className="group inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all duration-300"
          >
            Read more 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function RecentPosts() {
  return (
    <section className="bg-[var(--blog-bg)] py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Latest from Our Blog
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stay updated with the latest web development trends and techniques
          </motion.p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-medium hover:gap-3 transition-all duration-300"
          >
            View all posts
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
