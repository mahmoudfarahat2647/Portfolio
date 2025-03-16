'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Category {
  id: string;
  label: string;
}

const categories: Category[] = [
  { id: 'all', label: 'All Templates' },
  { id: 'landing', label: 'Landing Pages' },
  { id: 'dashboard', label: 'Dashboards' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'blog', label: 'Blog Templates' },
  { id: 'portfolio', label: 'Portfolios' },
];

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export function FilterBar() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="sticky top-16 z-20 bg-[#f8fafc] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="py-4">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          <div className={`flex flex-col lg:flex-row lg:items-center gap-4 ${isFiltersOpen ? 'block' : 'hidden lg:flex'}`}>
            {/* Categories */}
            <div className="flex flex-wrap gap-2 flex-grow">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#4361ee] text-white'
                      : 'bg-[#e2e8f0] text-gray-600 hover:bg-[#d1d5db]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <motion.div 
                className="relative"
                animate={{ width: searchFocused ? 300 : 200 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#4361ee] focus:ring-2 focus:ring-[#4361ee]/20 outline-none transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </motion.div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 rounded-lg border border-gray-200 focus:border-[#4361ee] focus:ring-2 focus:ring-[#4361ee]/20 outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#4361ee] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white text-[#4361ee] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
