'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, LayoutTemplate, Star, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  isInView: boolean;
}

const stats = [
  {
    icon: LayoutTemplate,
    value: 150,
    label: 'Premium Templates',
  },
  {
    icon: Users,
    value: 50000,
    label: 'Happy Customers',
    suffix: '+',
  },
  {
    icon: Star,
    value: 4.9,
    label: 'Average Rating',
    suffix: '/5',
  },
  {
    icon: Award,
    value: 15,
    label: 'Industry Awards',
  },
];

function StatItem({ icon: Icon, value, label, suffix = '', isInView }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-4 p-3 rounded-full bg-white/5">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <motion.div
        className="text-3xl md:text-4xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {value.toString().includes('.') ? value : (
            <CountingNumber value={value} isInView={isInView} />
          )}
          {suffix}
        </motion.span>
      </motion.div>
      <motion.p
        className="text-white/70"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {label}
      </motion.p>
    </div>
  );
}

function CountingNumber({ value, isInView }: { value: number; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      setDisplayValue(Math.min(Math.round(increment * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <>{displayValue}</>;
}

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="gradient-stats relative overflow-hidden py-16"
    >
      {/* Subtle moving background animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, var(--stats-bg-end) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, var(--stats-bg-end) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <StatItem {...stat} isInView={isInView} />
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-12 w-px bg-[var(--stats-border)] left-1/4 transform -translate-x-1/2" style={{ left: `${((index + 1) * 100) / 4}%` }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
