'use client';

import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Article {
  title: string;
  description: string;
  readingTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  icon: 'book' | 'code' | 'terminal' | 'video';
}

const difficultyColors = {
  beginner: 'bg-emerald-100 text-emerald-800',
  intermediate: 'bg-amber-100 text-amber-800',
  advanced: 'bg-red-100 text-red-800',
};

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

interface DocContentProps {
  articles: Article[];
}

export function DocContent({ articles }: DocContentProps) {
  return (
    <div className="flex-grow p-8">
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            {/* Icon Background */}
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="p-6 relative">
              {/* Category */}
              <div className="text-sm text-gray-500 mb-2">
                {article.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.description}
              </p>

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm">
                {/* Reading Time */}
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  {article.readingTime} min read
                </div>

                {/* Difficulty */}
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[article.difficulty]}`}>
                  <BarChart className="w-3 h-3" />
                  {difficultyLabels[article.difficulty]}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Read More Link */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <button className="flex items-center gap-1 text-[#4361ee] font-medium">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
