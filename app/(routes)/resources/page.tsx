'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ResourceTabs } from '@/components/resources/ResourceTabs';
import { SearchFilterBar } from '@/components/resources/SearchFilterBar';
import { DocsSidebar } from '@/components/resources/documentation/DocsSidebar';
import { DocContent } from '@/components/resources/documentation/DocContent';
import { TutorialGrid } from '@/components/resources/tutorials/TutorialGrid';
import type { Article } from '@/components/resources/documentation/DocContent';
import { Newsletter } from '@/components/home/Newsletter';

// Mock documentation articles
const mockArticles: Article[] = [
  {
    title: 'Getting Started with Templates',
    description: 'Learn how to quickly set up and customize your first template with our step-by-step guide.',
    readingTime: 5,
    difficulty: 'beginner',
    category: 'Getting Started',
    icon: 'book',
  },
  {
    title: 'Advanced Template Customization',
    description: 'Deep dive into template configuration options and learn how to make templates truly your own.',
    readingTime: 12,
    difficulty: 'intermediate',
    category: 'Templates',
    icon: 'code',
  },
  {
    title: 'Working with Components',
    description: 'Understand how to use and customize the built-in components in your templates.',
    readingTime: 8,
    difficulty: 'beginner',
    category: 'Components',
    icon: 'code',
  },
  {
    title: 'Deployment Strategies',
    description: 'Learn different approaches to deploy your templates to various hosting platforms.',
    readingTime: 15,
    difficulty: 'advanced',
    category: 'Deployment',
    icon: 'terminal',
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('docs');
  const [currentDoc, setCurrentDoc] = useState('getting-started/introduction');

  return (
    <>
      {/* Page Title Section */}
      <section className="bg-[#1f2937] text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Resources' },
            ]}
          />
          <div className="mt-6">
            <motion.h1 
              className="text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            >
              Resources
            </motion.h1>
            <motion.p
              className="text-[#d1d5db] text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Everything you need to get the most out of our templates
            </motion.p>
          </div>
        </div>
      </section>

      {/* Resource Navigation */}
      <ResourceTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Search & Filter */}
      <SearchFilterBar />

      {/* Content Section */}
      <section className="min-h-screen bg-[#f9fafb]">
        <div className="container mx-auto px-4 py-12">
          {activeTab === 'docs' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <DocsSidebar
                  currentDoc={currentDoc}
                  onDocSelect={setCurrentDoc}
                />
                <DocContent articles={mockArticles} />
              </div>
            </div>
          )}

          {/* Tutorial Grid */}
          {activeTab === 'tutorials' && <TutorialGrid />}

          {/* Other tab content */}
          {activeTab !== 'docs' && activeTab !== 'tutorials' && (
            <div className="text-center py-12 text-gray-500">
              Coming soon...
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
}
