import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'whatsapp' | 'call' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  asLink = false,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none text-center';

  const variants = {
    primary: 'bg-brand-purple hover:bg-brand-purple-900 text-white shadow-brand-sm hover:shadow-brand-md focus-visible:ring-brand-purple',
    whatsapp: 'bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white shadow-sm hover:shadow-md focus-visible:ring-brand-whatsapp',
    call: 'bg-brand-purple-900 hover:bg-brand-purple-950 text-white shadow-brand-sm focus-visible:ring-brand-purple',
    outline: 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple-50 focus-visible:ring-brand-purple',
    secondary: 'bg-brand-purple-100 hover:bg-brand-purple-200 text-brand-purple-900 focus-visible:ring-brand-purple',
    ghost: 'text-slate-600 hover:text-brand-purple hover:bg-brand-purple-50 focus-visible:ring-brand-purple',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 h-9 gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[46px] sm:min-h-[44px] gap-2',
    lg: 'text-base px-6 py-3 min-h-[50px] sm:min-h-[48px] gap-2.5 font-semibold',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (asLink && href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : rel} 
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
