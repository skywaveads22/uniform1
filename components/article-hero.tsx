import Image from 'next/image'
import { getImagePath } from '@/lib/image-helper'

interface ArticleHeroProps {
  title: string
  imagePath?: string
}

export default function ArticleHero({ title, imagePath }: ArticleHeroProps) {
  // Format image path using the helper function
  const formattedImagePath = getImagePath(imagePath || '/images/error-404.svg')
  const errorImagePath = getImagePath('/images/error-404.svg')
  
  return (
    <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl md:h-80 lg:h-96">
      <Image
        src={formattedImagePath}
        alt={title}
        fill
        className="object-cover"
        priority
        onError={(e) => {
          // Fallback to error image if the specified image fails to load
          const target = e.target as HTMLImageElement
          target.src = errorImagePath
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h1>
      </div>
    </div>
  )
} 