"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface FeaturedImageProps {
  src?: string;
  alt: string;
  category: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function FeaturedImage({ src, alt, category, priority = false, loading = "lazy" }: FeaturedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  const getFallbackImage = (cat: string): string => {
    const fallbacks: Record<string, string> = {
      aviation: '/images/aviation/aviation_uniforms.jpg',
      healthcare: '/images/healthcare/Healthcare_uniforms.jpg',
      hospitality: '/images/hospitality/Hotel_uniforms.jpeg',
      education: '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg',
      security: '/images/security/Security_uniforms.jpeg',
      industrial: '/images/industrial/industrial_uniform_fittings.jpeg',
      government: '/images/government/Government_uniforms.jpg'
    };
    
    return fallbacks[cat.toLowerCase()] || '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg';
  };

  const handleImageError = () => {
    if (!error) {
      setImageSrc(getFallbackImage(category));
      setError(true);
    }
  };

  useEffect(() => {
    setImageSrc(src);
    setError(false);
  }, [src]);

  return (
    <Image
      src={imageSrc || getFallbackImage(category)}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
      onError={handleImageError}
      priority={priority}
      loading={loading}
    />
  );
} 