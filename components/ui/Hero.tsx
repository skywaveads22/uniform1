import Image from 'next/image'
import { cn } from '@/lib/utils'
import { getImagePath } from '@/lib/image-helper'

interface HeroProps {
  title: string
  description?: string
  image: string
  imageAlt: string
  overlay?: boolean
  children?: React.ReactNode
  className?: string
}

export function Hero({
  title,
  description,
  image,
  imageAlt,
  overlay = true,
  children,
  className,
}: HeroProps) {
  // Use the helper function to get the correct image path
  const imagePath = getImagePath(image)
  
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {/* Hero Image - Using next/image with priority for LCP optimization */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          fetchPriority="high"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P//fwAJsAPTJUZrAgAAAABJRU5ErkJggg=="
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        )}
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          {/* Semantic HTML with proper heading structure */}
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          
          {description && (
            <p className="mb-8 text-xl leading-relaxed text-white/90">
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </section>
  )
} 