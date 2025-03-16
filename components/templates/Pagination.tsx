'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const [jumpToPage, setJumpToPage] = useState('');

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNumber = parseInt(jumpToPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
      setJumpToPage('');
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Always show first page
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="px-3 py-1 text-gray-600 hover:text-gray-900"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2 text-gray-400">
            ...
          </span>
        );
      }
    }

    // Current page and neighbors
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <motion.button
          key={i}
          onClick={() => onPageChange(i)}
          className={`relative px-3 py-1 rounded-md ${
            currentPage === i
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentPage === i && (
            <motion.div
              className="absolute inset-0 bg-[#4361ee] rounded-md -z-10"
              layoutId="activePage"
            />
          )}
          {i}
        </motion.button>
      );
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2 text-gray-400">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 text-gray-600 hover:text-gray-900"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg border ${
            currentPage === 1
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center">
          {renderPageNumbers()}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg border ${
            currentPage === totalPages
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleJumpSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={jumpToPage}
          onChange={(e) => setJumpToPage(e.target.value)}
          placeholder="Page #"
          className="w-20 px-3 py-1 rounded-lg border border-gray-200 focus:border-[#4361ee] focus:ring-2 focus:ring-[#4361ee]/20 outline-none"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
        >
          Go
        </button>
      </form>
    </div>
  );
}
