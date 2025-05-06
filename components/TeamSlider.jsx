"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TeamSlider = ({ members }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, members.length - 3);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Use a more basic approach to display team members
  const visibleMembers = members.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleMembers.map((member, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto relative">
              <Image
                src={member.image || "/images/author/placeholder.png"}
                alt={member.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
            <p className="text-sm font-medium text-muted-foreground mb-3">{member.position}</p>
            <p className="text-sm text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`p-2 rounded-full bg-primary text-white ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/80 transition-all hover:scale-110'
          }`}
          aria-label="Previous team members"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Indicator dots */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(members.length / 3) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * 3)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === Math.floor(currentIndex / 3) ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className={`p-2 rounded-full bg-primary text-white ${
            currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/80 transition-all hover:scale-110'
          }`}
          aria-label="Next team members"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TeamSlider; 