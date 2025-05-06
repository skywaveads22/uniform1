import React from 'react';

interface PartnerLogoProps {
  name: string;
  color?: string;
}

export function PartnerLogo({ name, color = '#3b82f6' }: PartnerLogoProps) {
  // Extract initials from the name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div 
      className="w-full h-full flex items-center justify-center rounded-lg" 
      style={{ backgroundColor: `${color}20` }}
    >
      <div 
        className="flex items-center justify-center rounded-full"
        style={{ 
          backgroundColor: color,
          width: '50px',
          height: '50px',
        }}
      >
        <span className="text-xl font-bold text-white">{initials}</span>
      </div>
    </div>
  );
} 