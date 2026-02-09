import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface FooterLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function FooterLink({
  to,
  children,
  className = '',
  icon,
}: FooterLinkProps) {
  return (
    <Link
      to={to}
      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-blue-200 hover:text-white hover:bg-blue-900/30 transition-all duration-300 ${className}`}
    >
      {icon && (
        <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
          {icon}
        </span>
      )}
      <span className="flex-1">{children}</span>
      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
    </Link>
  );
}
