"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getImagePath } from '@/lib/image-helper'

interface ArticleHeroProps {
  title: string
  imagePath?: string
}

export default function ArticleHero({ title, imagePath }: ArticleHeroProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // استخدام خطاف useEffect للتأكد من أن وظيفة getImagePath تعمل بشكل صحيح
  useEffect(() => {
    setImageLoaded(true)
  }, [])
  
  // تنسيق مسار الصورة باستخدام الدالة المساعدة
  const defaultImagePath = '/images/default-post-image.jpg'
  const formattedImagePath = getImagePath(imagePath || defaultImagePath)
  const errorImagePath = getImagePath('/images/placeholder-image.jpg')
  
  // استخدام صورة placeholder إذا كانت هناك مشكلة في الصورة الأصلية
  const imageSrc = imageError ? errorImagePath : formattedImagePath
  
  return (
    <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl md:h-80 lg:h-96">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h1>
      </div>
    </div>
  )
} 