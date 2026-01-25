import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section = ({ id, title, subtitle, children, className = "", containerClassName = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className={`container px-4 md:px-6 mx-auto ${containerClassName}`}>
        {title && (
          <div className="mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-[600px] leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="h-[1px] w-full bg-border mt-4" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

interface BentoCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export const BentoCard = ({ title, subtitle, description, icon: Icon, children, className = "" }: BentoCardProps) => {
  return (
    <div className={`glass rounded-xl p-6 hover:border-primary/50 transition-all group relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {Icon && <Icon className="w-12 h-12" />}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        </div>
        {subtitle && <p className="text-primary/80 text-sm font-medium mb-2">{subtitle}</p>}
        {description && <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};
