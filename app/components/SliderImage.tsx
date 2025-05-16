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

  const handleError = () => {
    const fallbackImage = getFallbackImage(category);
    setImageSrc(fallbackImage);
  };

  return (
    <Image
      src={imageSrc || getFallbackImage(category)}
      alt={alt}
      fill
      className="object-cover"
      onError={handleError}
      priority={priority}
      loading={priority ? undefined : loading}
    />
  );
} 