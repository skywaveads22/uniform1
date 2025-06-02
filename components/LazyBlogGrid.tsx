"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import BlogPostCard from '@/components/BlogPostCard'
import LoadingProgress from '@/components/LoadingProgress'

interface Article {
  id: number
  title: string
  internalLink: string
  imagePath: string
  category: string
}

interface LazyBlogGridProps {
  articles: Article[]
  itemsPerPage?: number
}

export default function LazyBlogGrid({ articles, itemsPerPage = 12 }: LazyBlogGridProps) {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const observerRef = useRef<HTMLDivElement>(null)

  // Load initial articles
  useEffect(() => {
    const initialArticles = articles.slice(0, itemsPerPage)
    setDisplayedArticles(initialArticles)
    setHasMore(articles.length > itemsPerPage)
  }, [articles, itemsPerPage])

  // Load more articles function
  const loadMoreArticles = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)
    setLoadingProgress(0)
    
    // Simulate progressive loading with progress updates
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 10
      })
    }, 50)
    
    setTimeout(() => {
      const startIndex = currentPage * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const newArticles = articles.slice(startIndex, endIndex)
      
      setLoadingProgress(100)
      
      setTimeout(() => {
        if (newArticles.length > 0) {
          setDisplayedArticles(prev => [...prev, ...newArticles])
          setCurrentPage(prev => prev + 1)
          setHasMore(endIndex < articles.length)
        } else {
          setHasMore(false)
        }
        
        setLoading(false)
        setLoadingProgress(0)
        clearInterval(progressInterval)
      }, 200)
    }, 500)
  }, [articles, currentPage, itemsPerPage, loading, hasMore])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMoreArticles()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [loadMoreArticles, hasMore, loading])

  return (
    <div className="space-y-8">
      {/* Loading Progress Bar */}
      <LoadingProgress isLoading={loading} progress={loadingProgress} />

      {/* Articles Counter */}
      <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Showing {displayedArticles.length} of {articles.length} articles
          </span>
          <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {hasMore ? `${articles.length - displayedArticles.length} more to load` : 'All articles loaded'}
          </span>
        </div>
        {loading && (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Loading...</span>
          </div>
        )}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedArticles.map((article, index) => {
          // Check if article is valid before rendering
          if (!article || !article.title || !article.internalLink) {
            return null;
          }
          
          return (
            <div
              key={article.id || index}
              className="opacity-0 animate-fadeIn blog-grid-item"
              style={{
                animationDelay: `${(index % itemsPerPage) * 50}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <BlogPostCard
                title={article.title}
                imagePath={article.imagePath || ''}
                internalLink={article.internalLink}
                category={article.category}
              />
            </div>
          );
        })}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="text-gray-600 dark:text-gray-300 animate-pulse">Loading more articles...</span>
          </div>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={`skeleton-${index}`} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                <div className="skeleton h-48 w-full"></div>
                <div className="p-4 space-y-3">
                  <div className="skeleton h-4 w-3/4 rounded"></div>
                  <div className="skeleton h-3 w-full rounded"></div>
                  <div className="skeleton h-3 w-2/3 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More Button (fallback for devices without intersection observer) */}
      {hasMore && !loading && (
        <div className="flex justify-center py-8">
          <button
            onClick={loadMoreArticles}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Load More Articles
          </button>
        </div>
      )}

      {/* End Message */}
      {!hasMore && displayedArticles.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-300">
            You've reached the end! Total articles: {articles.length}
          </p>
        </div>
      )}

      {/* Intersection Observer Target */}
      <div ref={observerRef} className="h-4" />

    </div>
  )
}