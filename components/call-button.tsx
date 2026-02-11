'use client';

import React from 'react';
import { PhoneIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import data from '@/src/data/site-content.json';

interface CallButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  label?: string;
  showIcon?: boolean;
}

export function CallButton({ className, variant = 'solid', label, showIcon = true, ...props }: CallButtonProps) {
  const variants = {
    solid: 'bg-(--primary) text-white! border-2 border-(--primary) hover:bg-transparent hover:text-(--primary)!',
    outline: 'bg-transparent text-(--primary) border-2 border-(--primary) hover:bg-(--primary) hover:text-white!',
    ghost: 'bg-transparent text-(--primary) hover:bg-(--primary)/10',
  };

  return (
    <a
      href={`tel:${data.brand.contact.phone}`}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300',
        variants[variant],
        className,
      )}
      {...props}
    >
      {showIcon && <PhoneIcon size={16} />}
      <span>{label ? label : `Call Us: (332) 322-0608`}</span>
    </a>
  );
}
