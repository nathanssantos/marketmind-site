import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container = ({ className, children, ...props }: ContainerProps) => (
  <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...props}>
    {children}
  </div>
);
