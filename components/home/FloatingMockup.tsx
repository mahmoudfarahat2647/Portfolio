'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingMockup() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the viewport
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[400px] select-none pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{
          rotateX: -mousePosition.y,
          rotateY: mousePosition.x,
          transformPerspective: 1000,
        }}
        transition={{ type: 'spring', stiffness: 75, damping: 15, mass: 0.5 }}
      >
        {/* Browser Frame */}
        <div className="relative w-full h-full bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl">
          {/* Browser Header */}
          <div className="h-8 bg-[#2D2D2D] flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 mx-4">
              <div className="w-full max-w-sm h-5 rounded bg-[#383838]" />
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 space-y-4">
            {/* Simulated content */}
            <div className="h-8 bg-[#383838] rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-[#383838] rounded w-full" />
              <div className="h-4 bg-[#383838] rounded w-5/6" />
              <div className="h-4 bg-[#383838] rounded w-4/6" />
            </div>
            <div className="flex gap-4 mt-6">
              <div className="h-10 bg-[#383838] rounded w-32" />
              <div className="h-10 bg-[#383838] rounded w-32" />
            </div>
          </div>
        </div>

        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      </motion.div>

      {/* Secondary Mockup (Mobile) */}
      <motion.div
        className="absolute right-0 bottom-0 w-48 h-80 translate-x-1/4 translate-y-1/4"
        animate={{
          rotateX: -mousePosition.y * 0.7,
          rotateY: mousePosition.x * 0.7,
          transformPerspective: 1000,
        }}
        transition={{ type: 'spring', stiffness: 75, damping: 15, mass: 0.5 }}
      >
        <div className="w-full h-full bg-[#1E1E1E] rounded-3xl overflow-hidden shadow-2xl">
          {/* Mobile Header */}
          <div className="h-6 bg-[#2D2D2D] flex items-center justify-center">
            <div className="w-16 h-4 bg-[#383838] rounded-full" />
          </div>

          {/* Mobile Content */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-[#383838] rounded w-3/4" />
            <div className="h-3 bg-[#383838] rounded w-full" />
            <div className="h-3 bg-[#383838] rounded w-5/6" />
            <div className="mt-4 h-8 bg-[#383838] rounded" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
