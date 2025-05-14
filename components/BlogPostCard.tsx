"use client"

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState, useEffect } from 'react'
import { getImagePath } from '@/lib/image-helper'

interface BlogPostCardProps {
  title: string
  imagePath: string
  internalLink: string
}

const BlogPostCard: FC<BlogPostCardProps> = ({
  title,
  imagePath,
  internalLink,
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // استخدام خطاف useEffect للتأكد من أن الكود يعمل على جانب العميل
  useEffect(() => {
    setImageLoaded(true)
    // تسجيل مسار الصورة للتشخيص أثناء التطوير
    if (process.env.NODE_ENV === 'development') {
      console.log('Image path:', imagePath);
    }
  }, [imagePath])
  
  // تنسيق مسار الصورة مع تأكيد أنها تتبع النمط الصحيح
  const formattedImagePath = getImagePath(imagePath || '/images/placeholder-image.jpg')
  
  // الحصول على الفئة من مسار الصورة
  const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security']
  const category = categories.find(cat => imagePath?.toLowerCase().includes(`/images/${cat}/`))
  
  // منع استخدام الخلفيات الملونة واستخدام صورة بديلة دائمًا بدلاً من ذلك
  const fallbackImagePath = getImagePath(`/images/${category || 'placeholder'}/placeholder.jpg`)
  
  // معالجة حدث خطأ الصورة
  const handleImageError = () => {
    console.error(`Error loading image: ${formattedImagePath}`);
    setImageError(true);
  }

  return (
    <Link href={internalLink} className="group">
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          {imageError ? (
            // استخدام صورة بديلة في حالة الخطأ
            <Image
              src={fallbackImagePath}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
          ) : (
            <Image
              src={formattedImagePath}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
              onError={handleImageError}
              onLoad={() => setImageLoaded(true)}
            />
          )}
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