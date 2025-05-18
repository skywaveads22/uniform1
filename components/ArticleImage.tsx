"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/lib/image-helper';

interface ArticleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  loading?: "lazy" | "eager";
}

/**
 * مكون للصور يستخدم في صفحات المقالات مع معالجة الأخطاء وتوفير صور بديلة
 */
export default function ArticleImage({
  src,
  alt,
  width = 1408,
  height = 960,
  className = "",
  priority = false,
  fill = false,
  loading = "lazy"
}: ArticleImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);
  
  // Get category from path to determine fallback image
  const getCategoryFromPath = useCallback((path: string): string => {
    const match = path.match(/\/images\/([^\/]+)\//);
    if (match && match[1]) {
      return match[1].toLowerCase();
    }
    return 'default';
  }, []);
  
  // Get fallback image based on category
  const getFallbackImage = useCallback((path: string): string => {
    const category = getCategoryFromPath(path);
    const fallbacks: Record<string, string[]> = {
      security: ['/images/security/Security_uniforms.jpeg'],
      education: ['/images/education/School_uniforms.jpg'],
      healthcare: ['/images/healthcare/Healthcare_uniforms.jpg'],
      hospitality: ['/images/hospitality/Hotel_uniforms.jpeg'],
      government: ['/images/government/Civil_service_uniforms.jpg'],
      aviation: ['/images/aviation/aviation_uniforms.jpg'],
      industrial: ['/images/industrial/industrial_uniform_fittings.jpeg'],
    };
    
    return fallbacks[category]?.[0] || '/images/placeholder-image.jpg';
  }, [getCategoryFromPath]);
  
  // Handle image error
  const handleImageError = useCallback(() => {
    if (!error) {
      const fallback = getFallbackImage(imageSrc);
      setImageSrc(fallback);
      setError(true);
    }
  }, [error, getFallbackImage, imageSrc]);
  
  // Reset state when src changes
  useEffect(() => {
    setImageSrc(src);
    setError(false);
  }, [src]);
  
  const imageProps = {
    src: imageSrc,
    alt,
    priority,
    loading: priority ? undefined : loading,
    onError: handleImageError,
    className: `${className} ${fill ? 'object-cover' : ''}`
  };
  
  // Render image with or without fill prop
  if (fill) {
    return <Image {...imageProps} fill />;
  }
  
  return <Image {...imageProps} width={width} height={height} />;
} 