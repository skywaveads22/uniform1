import Image from 'next/image'
import { getImagePath } from '@/lib/image-helper'

interface AuthorProps {
  name?: string
  image?: string
  date?: string
}

export default function Author({ name = 'Uniform SA Team', image = '/images/author/placeholder.webp', date }: AuthorProps) {
  // Format image paths
  const imagePath = getImagePath(image)
  const placeholderPath = getImagePath('/images/author/placeholder.webp')
  
  // Format date if provided
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="mb-8 flex items-center">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={imagePath}
          alt={name}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = placeholderPath
          }}
        />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{formattedDate}</p>
      </div>
    </div>
  )
} 