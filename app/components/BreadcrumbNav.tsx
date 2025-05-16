'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BreadcrumbListSchema } from './StructuredData'
import { ChevronRight, Home } from 'lucide-react'

const convertBreadcrumb = (crumb: string) => {
  return crumb
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/Seo/g, 'SEO')
}

export function BreadcrumbNav() {
  const pathname = usePathname()
  
  // If on homepage, don't show breadcrumbs
  if (pathname === '/') return null
  
  // Split and remove empty strings
  const pathParts = pathname.split('/').filter(Boolean)
  
  // Create breadcrumb items for schema
  const schemaItems = [
    { name: 'Home', item: 'https://fakhrkhaleej.com' },
    ...pathParts.map((part, index) => {
      const href = `/${pathParts.slice(0, index + 1).join('/')}`
      return {
        name: convertBreadcrumb(part),
        item: `https://fakhrkhaleej.com${href}`,
      }
    }),
  ]
  
  // Generate breadcrumb links
  const breadcrumbs = pathParts.map((part, index) => {
    const href = `/${pathParts.slice(0, index + 1).join('/')}`
    const label = convertBreadcrumb(part)
    const isLast = index === pathParts.length - 1
    
    return (
      <li key={href} className="flex items-center">
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400" aria-hidden="true" />
        {isLast ? (
          <span aria-current="page" className="font-medium text-gray-800 dark:text-gray-200">
            {label}
          </span>
        ) : (
          <Link href={href} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            {label}
          </Link>
        )}
      </li>
    )
  })
  
  return (
    <>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center text-sm">
          <li>
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              <Home className="mr-1 h-4 w-4" />
              <span>Home</span>
            </Link>
          </li>
          {breadcrumbs}
        </ol>
      </nav>
      
      {/* Add structured data for breadcrumbs */}
      <BreadcrumbListSchema items={schemaItems} />
    </>
  )
} 