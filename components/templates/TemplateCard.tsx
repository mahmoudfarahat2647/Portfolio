'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

interface TechStack {
  name: string;
  color: string;
}

interface Template {
  id: number;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  category: string;
  price: number;
  techStack: TechStack[];
  demoUrl: string;
}

interface TemplateCardProps {
  template: Template;
  viewMode?: 'grid' | 'list';
}

const categoryColors: Record<string, string> = {
  landing: 'bg-blue-100 text-blue-800',
  dashboard: 'bg-purple-100 text-purple-800',
  ecommerce: 'bg-green-100 text-green-800',
  blog: 'bg-yellow-100 text-yellow-800',
  portfolio: 'bg-pink-100 text-pink-800',
};

export function TemplateCard({ template, viewMode = 'grid' }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const gridMode = viewMode === 'grid';

  return (
    <motion.article
      className={`bg-white rounded-xl overflow-hidden transition-shadow duration-300 ${
        isHovered ? 'shadow-xl' : 'shadow-sm'
      } ${gridMode ? '' : 'flex gap-6'}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Thumbnail */}
      <div 
        className={`relative ${gridMode ? 'aspect-[16/10]' : 'w-64'} overflow-hidden bg-gradient-to-br`}
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${template.gradientFrom}, ${template.gradientTo})`,
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-200"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <Link
            href={template.demoUrl}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            title="Preview"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
            title="Favorite"
          >
            <Heart className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-1">
              {template.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {template.description}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <div className="px-3 py-1 bg-[#f0f9ff] rounded-full text-sm font-medium text-gray-900">
              ${template.price}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {template.techStack.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex items-center gap-1.5 px-2 py-1 rounded text-sm transition-colors duration-200"
              style={{
                backgroundColor: `${tech.color}20`,
                color: tech.color,
              }}
            >
              <span className="relative">
                <span className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Category */}
        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[template.category]}`}>
          {template.category}
        </div>
      </div>
    </motion.article>
  );
}
