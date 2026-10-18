import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'lavender' | 'purple' | 'success' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = 'lavender',
  size = 'md',
  className,
}) => {
  const variants = {
    lavender: 'bg-brand-purple-100 text-brand-purple-900 border border-brand-purple-200/60',
    purple: 'bg-brand-purple text-white',
    success: 'bg-green-100 text-green-800 border border-green-200',
    outline: 'border border-brand-purple-300 text-brand-purple-800 bg-white',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-1 gap-1.5 font-medium',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2 font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full select-none transition-colors shadow-2xs',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
