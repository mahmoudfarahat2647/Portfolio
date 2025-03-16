'use client';

import React, { useState, useEffect } from 'react';

interface CountingNumberProps {
  value: number;
  isInView: boolean;
}

export function CountingNumber({ value, isInView }: CountingNumberProps) {
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
