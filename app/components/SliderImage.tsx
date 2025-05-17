"use client";

import Image from 'next/image';
import { useState } from 'react';

interface SliderImageProps {
  src?: string;
  alt: string;
  category: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function SliderImage({ src, alt, category, priority = false, loading = "lazy" }: SliderImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  const getDefaultImage = (cat: string): string => {
    // Use a single default image for all categories to avoid placeholders
    return '/images/blog/Blog_uniforms.jpg';
  };

  const handleError = () => {
    const defaultImage = getDefaultImage(category);
    setImageSrc(defaultImage);
  };

  return (
    <Image
      src={imageSrc || getDefaultImage(category)}
      alt={alt}
      fill
      className="object-cover"
      onError={handleError}
      priority={priority}
      loading={priority ? undefined : loading}
    />
  );
} 