import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-xl border border-gray-200 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
