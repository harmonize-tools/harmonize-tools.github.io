import React from 'react';

interface LinkButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function LinkButton({ href, label = 'Open', className = '' }: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-md bg-white border border-purple-600 hover:bg-purple-50 focus:ring-2 focus:ring-purple-300 text-purple-700 px-4 py-2 text-sm font-medium shadow-sm transition-colors ${className}`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 14m4-11L5 19" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
