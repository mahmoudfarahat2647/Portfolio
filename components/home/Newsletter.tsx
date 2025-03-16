'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-[var(--stats-bg-start)] relative overflow-hidden py-24">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, var(--brand-gradient-start) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, var(--brand-gradient-start) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stay in the Loop
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Get the latest updates, templates, and insider tips delivered straight to your inbox.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative flex items-center max-w-md mx-auto">
              <div className="absolute left-3 text-white/40">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 pl-10 pr-32 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent transition-shadow"
                required
                disabled={isSubmitting}
              />
              <div className="absolute right-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    Subscribe
                    <ArrowRight 
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[var(--nav-hover-start)] to-[var(--nav-hover-end)]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </Button>
              </div>
            </div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isSubmitted ? 1 : 0,
                height: isSubmitted ? 'auto' : 0,
              }}
              className="absolute left-0 right-0 mt-2"
            >
              <p className="text-[var(--brand-accent)] text-sm">
                Thanks for subscribing! 🎉
              </p>
            </motion.div>
          </motion.form>

          {/* Privacy Note */}
          <motion.p 
            className="text-white/40 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We respect your privacy. Unsubscribe at any time.
            <br />
            <Link href="/privacy" className="underline hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
