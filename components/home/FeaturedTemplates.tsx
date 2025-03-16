'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Mock data for templates
const templates = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'Modern admin dashboard with dark mode and analytics',
    bgColor: 'from-blue-500 to-indigo-600',
    category: 'Dashboard',
    price: 49,
    technologies: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Portfolio Pro',
    description: 'Stunning portfolio template with 3D animations',
    bgColor: 'from-purple-500 to-pink-600',
    category: 'Portfolio',
    price: 39,
    technologies: ['Next.js', 'Three.js', 'Framer Motion'],
  },
  {
    id: 3,
    title: 'SaaS Landing',
    description: 'High-converting SaaS landing page template',
    bgColor: 'from-teal-500 to-emerald-600',
    category: 'Landing Page',
    price: 59,
    technologies: ['React', 'Tailwind', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Modern blog platform with MDX support',
    bgColor: 'from-orange-500 to-red-600',
    category: 'Blog',
    price: 45,
    technologies: ['Next.js', 'MDX', 'Tailwind'],
  },
  // Add more templates as needed
];

export function FeaturedTemplates() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsScrollStart(scrollLeft <= 0);
      setIsScrollEnd(scrollLeft >= scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[var(--featured-bg)] py-24 relative overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Templates
          </motion.h2>
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Discover our most popular and highest-rated templates
          </motion.p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-2 mb-6 px-4">
          <button
            onClick={() => scroll('left')}
            disabled={isScrollStart}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={isScrollEnd}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Templates Carousel */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 -mx-4 px-4"
          style={{ 
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              className="flex-none w-[300px] md:w-[350px]"
              style={{ scrollSnapAlign: 'start' }}
              whileHover={{ scale: 1.02, rotate: '1deg' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Template Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${template.bgColor} p-6 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg
-black/10" />
                  <h4 className="relative text-white text-xl font-bold text-center">
                    {template.title}
                  </h4>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block px-3 py-1 rounded-full bg-[#2d3142] border border-[#565f89] text-sm text-white/90 mb-4">
                    {template.category}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {template.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">
                    {template.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#4cc9f0] font-semibold">
                      ${template.price}
                    </span>
                    <button className="text-white/90 text-sm hover:text-white transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
