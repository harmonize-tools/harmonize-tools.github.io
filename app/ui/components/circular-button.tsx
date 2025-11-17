import React from 'react';
import Image from 'next/image';

export interface CircularButtonProps {
  icon: React.ElementType | string;
  label: string;
  onClick: () => void;
  isImage?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md';
}

export default function CircularButton({ icon, label, onClick, isImage = false, isActive = false, disabled = false }: CircularButtonProps) {
  const Icon = icon as React.ElementType;
  // stronger fade when disabled and remove hover effects
  const containerClasses = `transform transition-all duration-300 ease-in-out rounded-full p-4 w-24 h-24 flex items-center justify-center ${
    disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:scale-110 hover:shadow-lg'
  }`;

  const activeBg = isActive ? 'bg-purple-100 shadow-lg scale-105 rotate-3' : (disabled ? '' : 'hover:bg-purple-50 hover:rotate-3');

  return (
    <div className="flex flex-col items-center space-y-2 group">
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={() => {
          if (!disabled) onClick();
        }}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
        className={`${containerClasses} ${activeBg}`}
      >
        {isImage ? (
          <Image 
            src={icon as string} 
            alt={label}
            width={80}
            height={80}
            className={`text-current transform transition-transform duration-300 ${disabled ? 'filter grayscale' : ''} ${isActive ? '-rotate-3' : (disabled ? '' : 'group-hover:-rotate-3')}`}
          />
        ) : (
          typeof icon === 'string' ? (
            <span className={`text-2xl transition-all duration-300 ${isActive ? 'text-purple-700' : 'text-dark-purple'} ${disabled ? 'text-gray-400' : 'group-hover:text-purple-700'}`}>
              {icon}
            </span>
          ) : (
            <Icon className={`h-12 w-12 transition-all duration-300 ${isActive ? 'text-purple-700' : 'text-dark-purple'} ${disabled ? 'filter grayscale text-gray-400' : 'group-hover:text-purple-700'}`} 
            />
          )
        )}
      </div>
      <span className={`text-sm font-medium transition-all duration-300 ${isActive ? 'text-purple-700' : (disabled ? 'text-gray-400' : 'group-hover:text-purple-700')}`}>
        {label}
      </span>
    </div>
  );
}
