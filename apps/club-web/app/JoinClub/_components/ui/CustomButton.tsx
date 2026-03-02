'use client';

import { cn } from 'apps/club-web/lib/utils';
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
      'bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] active:bg-blue-700',

    destructive:
      'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white active:bg-red-600',

    muted:
      'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed shadow-none',
  };

  return (
    <button
      className={cn(
        'flex items-center justify-center rounded-xl px-6 py-4 text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 active:scale-[0.98] disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
