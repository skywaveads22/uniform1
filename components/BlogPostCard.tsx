"use client"

import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'

interface BlogPostCardProps {
  title: string
  imagePath: string
  internalLink: string
  category: string
  description?: string
  readTime?: string
  publishDate?: string
  tags?: string[]
  author?: string
}

const BlogPostCard: FC<BlogPostCardProps> = ({
  title,
  imagePath,
  internalLink,
  category,
  description,
  readTime = '5 دقائق',
  publishDate = '2025',
  tags = [],
  author
}) => {
  // Category info for badges and simple fallbacks
  const categoryInfo = {
    'aviation': { 
      name: 'الطيران', 
      emoji: '✈️',
      color: 'bg-blue-100 text-blue-800'
    },
    'education': { 
      name: 'التعليم', 
      emoji: '🎓',
      color: 'bg-indigo-100 text-indigo-800'
    },
    'healthcare': { 
      name: 'الرعاية الصحية', 
      emoji: '🏥',
      color: 'bg-green-100 text-green-800'
    },
    'security': { 
      name: 'الأمن', 
      emoji: '🛡️',
      color: 'bg-red-100 text-red-800'
    },
    'hospitality': { 
      name: 'الضيافة', 
      emoji: '🏨',
      color: 'bg-purple-100 text-purple-800'
    },
    'industrial': { 
      name: 'الصناعة', 
      emoji: '🏭',
      color: 'bg-orange-100 text-orange-800'
    },
    'government': { 
      name: 'الحكومة', 
      emoji: '🏛️',
      color: 'bg-gray-100 text-gray-800'
    },
  }

  const catInfo = categoryInfo[category as keyof typeof categoryInfo] || {
    name: category,
    emoji: '📁',
    color: 'bg-gray-100 text-gray-800'
  }

  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  
  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Use original image path or fallback to placeholder
  const displayImagePath = imageError ? '/images/placeholder-image.jpg' : imagePath

  return (
    <Link href={internalLink} className="group">
      <article className="blog-card-hover overflow-hidden rounded-xl bg-white shadow-md h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          {imageLoading && (
            <div className="absolute inset-0 skeleton"></div>
          )}
          <Image 
            src={displayImagePath}
            alt={title}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${catInfo.color} backdrop-blur-sm bg-opacity-90`}>
              <span className="ml-1">{catInfo.emoji}</span>
              {catInfo.name}
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary leading-tight">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
              {description}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="inline-block rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="text-xs text-gray-500">+{tags.length - 2}</span>
              )}
            </div>
          )}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{publishDate}</span>
              </div>
            </div>
          </div>

          {/* Author */}
          {author && (
            <div className="text-xs text-gray-500 mb-4 border-t pt-3">
              <span>بواسطة: {author}</span>
            </div>
          )}

          {/* Read More */}
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                اقرأ المزيد
              </span>
              <ArrowLeft className="h-4 w-4 text-primary transform group-hover:-translate-x-1 transition-transform" />
            </div>
            <div className="mt-2 h-0.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary scale-x-0 group-hover:scale-x-100 transform origin-right transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogPostCard 