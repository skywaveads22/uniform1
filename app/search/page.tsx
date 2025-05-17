"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search as SearchIcon } from 'lucide-react'
import { BreadcrumbNav } from '../components/BreadcrumbNav'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Categories to help with search suggestions
  const categories = [
    { name: "Aviation", href: "/blog/category/aviation" },
    { name: "Education", href: "/blog/category/education" },
    { name: "Government", href: "/blog/category/government" },
    { name: "Healthcare", href: "/blog/category/healthcare" },
    { name: "Hospitality", href: "/blog/category/hospitality" },
    { name: "Industrial", href: "/blog/category/industrial" },
    { name: "Security", href: "/blog/category/security" },
  ]

  // Sample topics that are commonly searched
  const popularTopics = [
    "uniform policy",
    "custom design",
    "measurement",
    "healthcare uniforms",
    "security uniforms",
  ]

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return
    
    setIsSearching(true)
    
    // Simulate search - in a real app this would call an API
    setTimeout(() => {
      // Redirect to blog category if the search term matches a category
      const matchedCategory = categories.find(cat => 
        searchTerm.toLowerCase().includes(cat.name.toLowerCase())
      )
      
      if (matchedCategory) {
        window.location.href = matchedCategory.href
        return
      }
      
      // Otherwise show general results
      setResults([
        { 
          title: `Blog articles related to "${searchTerm}"`,
          href: `/blog` 
        },
        { 
          title: `Services related to "${searchTerm}"`,
          href: `/services` 
        },
      ])
      
      setIsSearching(false)
    }, 500)
  }

  // Handle clicking a popular topic
  const handleTopicClick = (topic: string) => {
    setSearchTerm(topic)
    // Trigger search automatically
    setTimeout(() => {
      const form = document.getElementById('search-form') as HTMLFormElement
      if (form) form.dispatchEvent(new Event('submit', { cancelable: true }))
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbNav />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Search our site</h1>
        
        {/* Search Form */}
        <form id="search-form" onSubmit={handleSearch} className="mb-12">
          <div className="flex w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for uniforms, services, or industry information..."
              className="w-full px-4 py-3 rounded-l-lg focus:outline-none dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="bg-primary px-6 rounded-r-lg text-white flex items-center justify-center"
              disabled={isSearching}
            >
              {isSearching ? (
                <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin"></div>
              ) : (
                <SearchIcon size={20} />
              )}
            </button>
          </div>
        </form>
        
        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {popularTopics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary"
              >
                <span className="font-medium dark:text-white">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Search Results */}
        {results.length > 0 && (
          <div>
            <h2 className="text-lg font-medium mb-4 dark:text-white">Search Results</h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.href}
                  className="block p-4 rounded-lg bg-white border border-gray-200 hover:border-primary hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-primary"
                >
                  <span className="font-medium dark:text-white">{result.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 