'use client';

import { cn } from 'lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'destructive' | 'muted';
}

export const CustomButton = ({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      'bg-blue-600 hover:bg-blue-700 rounded-2xl text-white shadow-lg shadow-blue-500/20',
    destructive: 'bg-red-500 hover:bg-red-600 text-white',
    muted: 'bg-white/5 text-white/20 cursor-not-allowed',
  };

  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-2xl px-6 py-4 font-black uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
