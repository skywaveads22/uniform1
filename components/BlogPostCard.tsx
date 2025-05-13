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
  
  // استخدام خطاف useEffect للتأكد من أن وظيفة getImagePath تعمل بالتزامن مع تحديثات متغيرات البيئة في Netlify
  useEffect(() => {
    // تحديث متغير imageLoaded عند تحميل الصفحة لضمان الحصول على القيمة الصحيحة من متغيرات البيئة
    setImageLoaded(true)
  }, [])
  
  // تحديد مسار الصورة ومعالجة التنسيق باستخدام الدالة المساعدة
  const formattedImagePath = getImagePath(imagePath)
  
  // التحقق مما إذا كان المسار هو ملف صغير الحجم (fabric-selection.jpg)
  const isTinyImage = formattedImagePath.includes('fabric-selection.jpg')
  
  // استخدام صورة placeholder إذا لم يكن هناك مسار للصورة، أو إذا كان هناك خطأ في الصورة، أو إذا كان الملف صغير جدًا
  const shouldUsePlaceholder = imageError || !imagePath || isTinyImage
  
  // الحصول على الفئة من مسار الصورة
  const categories = ['aviation', 'education', 'government', 'healthcare', 'hospitality', 'industrial', 'security']
  const category = categories.find(cat => imagePath?.toLowerCase().includes(`/images/${cat}/`))
  
  // إنشاء placeholder باستخدام الحرف الأول من العنوان إذا لم تكن هناك صورة
  const firstLetter = title.charAt(0).toUpperCase()
  
  // اختيار لون بناءً على الفئة أو الرجوع إلى لون افتراضي
  const getCategoryColor = () => {
    switch(category) {
      case 'aviation': return 'bg-blue-600'
      case 'education': return 'bg-green-600'
      case 'government': return 'bg-purple-600'
      case 'healthcare': return 'bg-red-600'
      case 'hospitality': return 'bg-yellow-600'
      case 'industrial': return 'bg-gray-600'
      case 'security': return 'bg-teal-600'
      default: return 'bg-primary'
    }
  }

  // Get error placeholder image path
  const errorPlaceholderPath = getImagePath('/images/error-404.svg')

  return (
    <Link href={internalLink} className="group">
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          {shouldUsePlaceholder ? (
            <div className={`h-full w-full flex items-center justify-center ${getCategoryColor()}`}>
              <span className="text-5xl font-bold text-white">{firstLetter}</span>
            </div>
          ) : (
            <Image
              src={formattedImagePath}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
              onError={() => setImageError(true)}
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