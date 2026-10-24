import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Badge({ className = '', variant = 'default', children, ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors';
  const variants: Record<string, string> = {
    default: 'bg-[var(--gwn-red)] text-white',
    secondary: 'bg-gray-100 text-gray-800',
    destructive: 'bg-red-500 text-white',
    outline: 'border border-gray-300 text-gray-700',
  };

  return (
    <div className={`${baseStyles} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </div>
  );
}
