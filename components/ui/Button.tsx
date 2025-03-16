'use client';

import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'gradient-primary text-white hover:opacity-90',
        secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
        ghost: 'bg-transparent hover:bg-white/5 text-white',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-12 px-8 text-lg',
      },
      animation: {
        none: '',
        glow: 'animate-glow',
        lift: 'hover-lift',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      animation: 'none',
    }
  }
);

interface ButtonProps 
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, animation, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, animation, className }))}
        whileTap={{ scale: 0.98 }}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
