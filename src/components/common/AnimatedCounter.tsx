import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
  duration?: number; // in seconds
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  duration = 1.8,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    // Parse target number, prefix, suffix, and decimals
    const strVal = String(value).trim();
    // Match numeric part (including commas and decimal points)
    const match = strVal.match(/^([^\d.]*)([\d,]+(?:\.\d+)?)(.*)$/);

    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1] || '';
    const rawNumberStr = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNumber = parseFloat(rawNumberStr);
    const hasDecimals = rawNumberStr.includes('.');
    const decimalPlaces = hasDecimals ? rawNumberStr.split('.')[1].length : 0;
    const hasCommas = match[2].includes(',');

    if (isNaN(targetNumber) || !isInView) {
      if (!isInView) {
        setDisplayValue(`${prefix}0${suffix}`);
      }
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Smooth ease-out quad formula
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = targetNumber * easeOutProgress;

      let formattedNumber: string;
      if (hasDecimals) {
        formattedNumber = currentNumber.toFixed(decimalPlaces);
      } else {
        formattedNumber = Math.round(currentNumber).toString();
      }

      if (hasCommas) {
        const parts = formattedNumber.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNumber = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Ensure final exact value
        setDisplayValue(strVal);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, isInView, duration]);

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
