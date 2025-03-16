'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const navItems = [
  { name: 'Templates', href: '/templates' },
  { name: 'Resources', href: '/resources' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        controls.start({ opacity: 0.9 });
      } else {
        setIsScrolled(false);
        controls.start({ opacity: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      initial={{ backgroundColor: 'rgb(18, 18, 18)', opacity: 1 }}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Logo</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white relative group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-accent)] group-hover:w-full transition-all duration-300"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-[var(--brand-light)] transition-colors duration-200 relative group">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-[var(--brand-accent)] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="px-4 py-2 text-white rounded-lg border border-white/20 hover:border-white/40 transition-colors duration-200 animate-glow">
              Login
            </button>
            <button className="gradient-primary px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
