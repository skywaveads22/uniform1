"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home, RefreshCw } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16">
      <div className="max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/error-404.svg"
            alt="404 Illustration"
            width={300}
            height={300}
            className="h-64 w-auto"
          />
        </div>
        
        <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Page Not Found</h1>
        
        <p className="mb-8 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
          >
            Return Home
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-gray-800 transition-colors hover:bg-gray-100"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 