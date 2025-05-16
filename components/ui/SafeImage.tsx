'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import getValidImagePath, { getCategoryFallbackImage } from '@/lib/image-helper';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
  category?: string;
}

/**
 * SafeImage component wraps Next.js Image with error handling and fallbacks
 * It ensures images that fail to load are replaced with appropriate fallbacks
 */
export function SafeImage({
  src,
  fallbackSrc,
  category,
  alt,
  ...rest
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => {
    // Always use WebP versions when possible
    return getValidImagePath(src);
  });
  
  const [error, setError] = useState(false);

  // Handle image load error
  const handleError = () => {
    if (!error) {
      setError(true);
      
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        // Use category-specific fallback or default
        const defaultFallback = '/webp/placeholder-image.webp'; 
        const categoryFallbacks: Record<string, string> = {
          aviation: '/webp/aviation_uniforms.webp',
          hospitality: '/webp/Hospitality_uniforms.webp',
          healthcare: '/webp/Medical_uniforms_Saudi_Arabia_KSA.webp',
          education: '/webp/placeholder-image.webp',
          security: '/webp/placeholder-image.webp',
          industrial: '/webp/placeholder-image.webp',
          government: '/webp/placeholder-image.webp',
        };
        
        if (category && categoryFallbacks[category]) {
          setImgSrc(categoryFallbacks[category]);
        } else {
          setImgSrc(defaultFallback);
        }
      }
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt || 'Image'}
      onError={handleError}
      {...rest}
    />
  );
}

export default SafeImage; 