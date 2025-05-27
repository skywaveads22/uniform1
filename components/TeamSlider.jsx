"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/image-helper';
import ErrorBoundary from './ErrorBoundary';

const TeamMember = ({ member, placeholderImage }) => (
  <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
    <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto relative">
      <Image
        src={member.image ? getImagePath(member.image) : placeholderImage}
        alt={member.name}
        width={160}
        height={160}
        className="object-cover w-full h-full"
        onError={(e) => {
          e.target.src = placeholderImage;
          // Failed to load image
        }}
      />
    </div>
    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
    <p className="text-sm font-medium text-muted-foreground mb-3">{member.position}</p>
    <p className="text-sm text-gray-600">{member.bio}</p>
  </div>
);

const TeamSlider = ({ members = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, members.length - 3);

  // Default placeholder image
  const placeholderImage = getImagePath('/images/author/placeholder.png');

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Use a more basic approach to display team members
  const visibleMembers = members.slice(currentIndex, currentIndex + 3);

  return (
    <ErrorBoundary>
      <div className="relative my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleMembers.map((member, index) => (
            <TeamMember
              key={`${member.name}-${index}`}
              member={member}
              placeholderImage={placeholderImage}
            />
          ))}
        </div>

        {members.length > 3 && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${
                currentIndex === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-primary hover:bg-primary/10'
              }`}
              aria-label="Previous team members"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className={`p-2 rounded-full ${
                currentIndex >= maxIndex ? 'text-gray-400 cursor-not-allowed' : 'text-primary hover:bg-primary/10'
              }`}
              aria-label="Next team members"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default TeamSlider; 