'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageTest {
  path: string;
  category: string;
  name: string;
}

export default function TestImagesPage() {
  const [images, setImages] = useState<ImageTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Collection of image paths to test
    const imagesToTest: ImageTest[] = [
      // Education images
      { path: '/images/education/School_uniforms.jpg', category: 'education', name: 'School Uniforms' },
      { path: '/images/education/School_uniforms_Saudi_Arabia_KSA.jpg', category: 'education', name: 'KSA School Uniforms' },
      
      // Healthcare images
      { path: '/images/healthcare/Medical_uniforms_Saudi_Arabia_KSA.jpg', category: 'healthcare', name: 'Medical Uniforms' },
      { path: '/images/healthcare/Medical_staff_uniforms.jpg', category: 'healthcare', name: 'Medical Staff' },
      
      // Hospitality images
      { path: '/images/hospitality/Hospitality_uniforms.jpeg', category: 'hospitality', name: 'Hospitality Uniforms' },
      { path: '/images/hospitality/Hotel_reception_uniforms_Front_desk_uniforms.jpeg', category: 'hospitality', name: 'Reception Uniforms' },
      
      // Government images
      { path: '/images/government/Government_uniforms.jpg', category: 'government', name: 'Government Uniforms' },
      { path: '/images/government/Civil_service_uniforms.jpg', category: 'government', name: 'Civil Service' },
      
      // Security images
      { path: '/images/security/Security_guard_uniforms_Saudi_Arabia_KSA.jpeg', category: 'security', name: 'Security Guards' },
      
      // Industrial images
      { path: '/images/industrial/Industrial_uniforms.jpeg', category: 'industrial', name: 'Industrial Uniforms' },
      
      // Aviation images
      { path: '/images/aviation/aviation_uniforms.jpg', category: 'aviation', name: 'Aviation Uniforms' },
      
      // Placeholder image
      { path: '/images/placeholder-image.jpg', category: 'placeholder', name: 'Placeholder' },
    ];

    setImages(imagesToTest);
    setLoading(false);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Image Loading Test</h1>
      
      {loading ? (
        <p>Loading images...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          <p className="mb-4">This test displays {images.length} images to ensure they are shown correctly.</p>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={image.path}
                    alt={image.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{image.name}</p>
                  <p className="text-sm text-gray-600">{image.category}</p>
                  <p className="mt-1 text-xs text-gray-500 break-all">{image.path}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link href="/blog" className="rounded-lg bg-primary px-4 py-2 text-white">
              Return to Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// Component to display image with fallback in case of failure
function ImageWithFallback({ src, alt, ...props }: any) {
  const [error, setError] = useState(false);
  const fallbackSrc = '/images/placeholder-image.jpg';

  return (
    <>
      {error ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-200">
          <span className="text-sm text-gray-500">Image not available</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt || 'Image'}
          onError={() => {
            console.error(`Failed to load image: ${src}`);
            setError(true);
          }}
          {...props}
        />
      )}
    </>
  );
} 