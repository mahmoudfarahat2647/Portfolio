'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Book } from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    slug: string;
  }[];
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { id: 'introduction', title: 'Introduction', slug: 'getting-started/introduction' },
      { id: 'installation', title: 'Installation', slug: 'getting-started/installation' },
      { id: 'quick-start', title: 'Quick Start', slug: 'getting-started/quick-start' },
    ],
  },
  {
    id: 'templates',
    title: 'Working with Templates',
    items: [
      { id: 'customization', title: 'Customizing Templates', slug: 'templates/customization' },
      { id: 'configuration', title: 'Configuration', slug: 'templates/configuration' },
      { id: 'deployment', title: 'Deployment', slug: 'templates/deployment' },
    ],
  },
  {
    id: 'components',
    title: 'Components',
    items: [
      { id: 'ui-components', title: 'UI Components', slug: 'components/ui' },
      { id: 'layouts', title: 'Layout Components', slug: 'components/layouts' },
      { id: 'forms', title: 'Form Components', slug: 'components/forms' },
    ],
  },
];

interface DocsSidebarProps {
  currentDoc: string;
  onDocSelect: (slug: string) => void;
}

export function DocsSidebar({ currentDoc, onDocSelect }: DocsSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <nav className="w-64 flex-shrink-0 border-r border-gray-200 h-[calc(100vh-16rem)] overflow-y-auto">
      <div className="p-4">
        {docSections.map((section) => (
          <div key={section.id} className="mb-4">
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full py-2 px-3 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="flex items-center gap-2">
                <Book className="w-4 h-4 text-gray-500" />
                {section.title}
              </span>
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            <AnimatePresence>
              {expandedSections.includes(section.id) && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 mt-1 space-y-1 overflow-hidden"
                >
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => onDocSelect(item.slug)}
                        className={`
                          w-full text-left py-2 px-3 text-sm rounded-lg transition-colors duration-200
                          ${currentDoc === item.slug
                            ? 'bg-[#4361ee] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                          }
                        `}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
}
