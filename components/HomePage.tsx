"use client"

import Link from 'next/link'

interface Category {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

const categories: Category[] = [
  // Categories have been removed as requested
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Uniform Categories</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link 
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="flex items-center space-x-4 rounded-lg border p-4 transition-colors hover:border-primary hover:bg-primary/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
              {category.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{category.title}</h2>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 