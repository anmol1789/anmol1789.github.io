import { ReactNode } from 'react';

interface SectionBadgeProps {
  icon?: ReactNode;
  children: ReactNode;
}

const SectionBadge = ({ icon, children }: SectionBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-portfolio-section-badge border border-portfolio-section-badge-border text-sm font-medium text-foreground mb-6">
      {icon}
      {children}
    </div>
  );
};

export default SectionBadge;