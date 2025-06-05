import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
}

export function PageTitle({ title, subtitle, icon, className }: PageTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12 text-center", className)}>
      {icon && <div className="flex justify-center mb-4 text-primary">{icon}</div>}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}