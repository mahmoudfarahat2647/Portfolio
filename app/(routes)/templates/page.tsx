'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { FilterBar } from '@/components/templates/filters/FilterBar';
import { TemplateCard } from '@/components/templates/TemplateCard';
import { Pagination } from '@/components/templates/Pagination';
import { Newsletter } from '@/components/home/Newsletter';

// Mock data
const mockTemplates = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Template ${i + 1} - Modern ${['Landing Page', 'Dashboard', 'E-commerce', 'Portfolio'][i % 4]}`,
  description: 'A fully responsive and customizable template built with Next.js, TailwindCSS, and TypeScript.',
  gradientFrom: [
    '#4F46E5',
    '#7C3AED',
    '#2DD4BF',
    '#EC4899'
  ][i % 4],
  gradientTo: [
    '#818CF8',
    '#A78BFA',
    '#14B8A6',
    '#F472B6'
  ][i % 4],
  category: ['landing', 'dashboard', 'ecommerce', 'portfolio'][i % 4],
  price: Math.floor(Math.random() * 30) + 20,
  techStack: [
    { name: 'Next.js', color: '#000000' },
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'TailwindCSS', color: '#06B6D4' },
  ],
  demoUrl: '#',
}));

export default function TemplatesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 9;
  const totalPages = Math.ceil(mockTemplates.length / templatesPerPage);

  // Get current templates
  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = mockTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);

  return (
    <>
      {/* Page Title Section */}
      <section className="bg-[#1f2937] text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Templates' },
            ]}
          />
          <div className="mt-6 flex items-baseline justify-between">
            <div>
              <motion.h1 
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
              >
                Website Templates
              </motion.h1>
              <motion.p
                className="text-[#d1d5db] text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Build your next project faster with our premium templates
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#5570ff] font-medium"
            >
              {mockTemplates.length} templates
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <FilterBar />

      {/* Templates Grid */}
      <section className="bg-[#f9fafb] min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}
