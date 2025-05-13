"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home, RefreshCw } from 'lucide-react'

export default function NotFound() {
  // Categories to suggest for navigation
  const categories = [
    { name: "Aviation", href: "/aviation" },
    { name: "Education", href: "/education" },
    { name: "Government", href: "/government" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Hospitality", href: "/hospitality" },
    { name: "Industrial", href: "/industrial" },
    { name: "Security", href: "/security" },
  ]
  
  // Quick links to suggest
  const popularLinks = [
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 min-h-[70vh] text-center dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6 dark:text-white">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 dark:text-gray-300">
          We're sorry, the page you were looking for doesn't exist or has been moved.
        </p>

        {/* Primary action */}
        <Link 
          href="/"
          className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 mb-12"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        {/* Helpful suggestions */}
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="text-left">
            <h3 className="text-xl font-medium mb-4 dark:text-white">Industry Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link 
                    href={category.href}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {category.name} Uniforms
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-medium mb-4 dark:text-white">Popular Pages</h3>
            <ul className="space-y-2">
              {popularLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-gray-600 dark:text-gray-400">
          If you believe this is an error, please{' '}
          <Link href="/contact" className="text-primary hover:underline">
            contact our support team
          </Link>.
        </p>
      </div>
    </main>
  )
} 