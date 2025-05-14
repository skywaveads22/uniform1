import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SliderImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  priority?: boolean;
}

export default function SliderImage({ src, alt, fallbackSrc, priority = false }: SliderImageProps) {
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  // Reset error state if src changes
  useEffect(() => {
    setImageSrc(src);
    setError(false);
  }, [src]);
  
  // Use useEffect for logging instead of JSX
  useEffect(() => {
    console.log(`Rendering SliderImage with src: ${imageSrc}`);
  }, [imageSrc]);
  
  return (
    <Image
      src={error ? fallbackSrc : imageSrc}
      alt={alt}
      fill
      className="object-cover"
      priority={priority}
      sizes="100vw"
      onError={() => {
        console.error(`Failed to load image: ${imageSrc}, using fallback: ${fallbackSrc}`);
        setError(true);
        setImageSrc(fallbackSrc);
      }}
    />
  );
} 