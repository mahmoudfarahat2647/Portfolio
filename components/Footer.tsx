'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Templates', href: '/templates' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'What\'s New', href: '/updates' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  Support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
  ],
  Legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'License', href: '/license' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

function FooterLink({ link }: { link: { name: string; href: string } }) {
  return (
    <li key={link.name}>
      <Link
        href={link.href}
        className="text-white/70 hover:text-white transition-colors duration-200 relative group"
      >
        {link.name}
        <motion.span
          className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[var(--brand-gradient-start)] to-[var(--brand-gradient-end)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          initial={false}
        />
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="flex justify-between items-start flex-wrap mb-12">
          {/* Logo and Social */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold mb-6 block">
              Logo
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4 text-lg">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <FooterLink key={link.name} link={link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
