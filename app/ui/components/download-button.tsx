import React from 'react';

interface DownloadButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function DownloadButton({ href, label = 'Download', className = '' }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center gap-2 rounded-md bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors ${className}`}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Simple download SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l4-4m-4 4-4-4M21 21H3" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
