"use client"

import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostCardProps {
  title: string
  imagePath: string
  internalLink: string
  category: string
}

const BlogPostCard: FC<BlogPostCardProps> = ({
  title,
  imagePath,
  internalLink,
  category,
}) => {
  // Default fallback images for each category if the provided image fails
  const fallbackImages = {
    'aviation': '/images/aviation/aviation_uniforms.jpg',
    'education': '/images/education/Boys_school_uniforms.jpg',
    'healthcare': '/images/healthcare/Doctor_uniforms_attire.jpg',
    'security': '/images/security/Security_uniforms.jpeg',
    'hospitality': '/images/hospitality/Hotel_uniforms.jpeg',
    'industrial': '/images/industrial/industrial_uniform_fittings.jpeg',
    'government': '/images/government/Civil_service_uniforms.jpg',
  }

  // If imagePath is empty or invalid, use fallback image based on category
  const [currentImagePath, setCurrentImagePath] = useState(imagePath)
  
  // Handle image load error by switching to fallback
  const handleImageError = () => {
    const fallbackImage = fallbackImages[category as keyof typeof fallbackImages] || '/images/placeholder-image.jpg'
    setCurrentImagePath(fallbackImage)
  }

  return (
    <Link href={internalLink} className="group">
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image 
            src={currentImagePath}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
          />
        </div>
        <div className="p-5">
          <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-800 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="mt-4 flex items-center">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="mx-2 text-sm font-medium text-primary">Read More</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogPostCard 