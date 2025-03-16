'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChevronDown, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const categories = [
  'All Resources',
  'Getting Started',
  'Development',
  'Design',
  'Integration',
  'Best Practices',
];

const popularTags = [
  'Next.js',
  'React',
  'TypeScript',
  'TailwindCSS',
  'API',
  'Performance',
  'SEO',
  'Deployment',
  'Authentication',
  'Database',
];

export function SearchFilterBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Resources');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Main Search Bar */}
        <div className="flex flex-wrap gap-4 items-center">
          <motion.div 
            className="flex-grow relative"
            animate={{ 
              width: searchFocused ? '100%' : 'auto',
              flexBasis: searchFocused ? '100%' : 'auto'
            }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#4361ee] focus:ring-2 focus:ring-[#4361ee]/20 outline-none transition-all duration-200"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </motion.div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:border-[#4361ee] focus:ring-2 focus:ring-[#4361ee]/20 outline-none bg-white cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Advanced Search Toggle */}
          <Button
            variant="secondary"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Advanced
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                showAdvanced ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </div>

        {/* Advanced Search Panel */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="space-y-4">
                  {/* Popular Tags */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <button
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
