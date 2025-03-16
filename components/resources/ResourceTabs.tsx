'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Book, 
  Video, 
  FileText, 
  Download, 
  HelpCircle, 
  Users,
  Laptop
} from 'lucide-react';

const tabs = [
  { id: 'docs', label: 'Documentation', icon: Book },
  { id: 'tutorials', label: 'Tutorials', icon: Laptop },
  { id: 'blog', label: 'Blog Articles', icon: FileText },
  { id: 'videos', label: 'Video Tutorials', icon: Video },
  { id: 'downloads', label: 'Cheat Sheets', icon: Download },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'community', label: 'Community', icon: Users },
];

interface ResourceTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function ResourceTabs({ activeTab, onTabChange }: ResourceTabsProps) {
  return (
    <div className="relative border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`
                  relative flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap
                  ${isActive ? 'text-[#4361ee]' : 'text-gray-600 hover:text-gray-900'}
                  transition-colors duration-200
                `}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4361ee]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
