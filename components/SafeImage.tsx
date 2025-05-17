"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  fallbackSrc = "/images/blog/Blog_uniforms.jpg"
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    priority,
    onError: handleError,
    onLoad: handleLoad,
  };

  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      {fill ? (
        <Image
          {...imageProps}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <Image
          {...imageProps}
          width={width || 800}
          height={height || 600}
        />
      )}
    </div>
  );
} 