"use client"

import { useState, useMemo } from 'react'
import { Search, Filter, Grid, List, Calendar, User, Tag, Clock } from 'lucide-react'
import BlogPostCard from '@/components/BlogPostCard'
import { motion, AnimatePresence } from 'framer-motion'

interface Article {
  id: number
  title: string
  slug: string
  description: string
  imagePath: string
  category: string
  tags: string[]
  publishDate: string
  readTime: string
  author: string
}

interface Category {
  name: string
  nameAr: string
  href: string
  description: string
  count: number
}

interface BlogGridProps {
  articles: Article[]
  categories: Category[]
}

type SortOption = 'newest' | 'oldest' | 'title' | 'category'
type ViewMode = 'grid' | 'list'

export default function BlogGrid({ articles, categories }: BlogGridProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort articles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id // Newer articles have higher IDs
        case 'oldest':
          return a.id - b.id
        case 'title':
          return a.title.localeCompare(b.title)
        case 'category':
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return filtered
  }, [articles, searchTerm, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage)
  const paginatedArticles = filteredAndSortedArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Reset pagination when filters change
  const handleFilterChange = (newCategory: string) => {
    setSelectedCategory(newCategory)
    setCurrentPage(1)
  }

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm)
    setCurrentPage(1)
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-right focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">جميع التصنيفات</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.nameAr} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">ترتيب:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="newest">الأحدث</option>
              <option value="oldest">الأقدم</option>
              <option value="title">العنوان</option>
              <option value="category">التصنيف</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded px-3 py-1 text-sm transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`rounded px-3 py-1 text-sm transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-900">
            {filteredAndSortedArticles.length} من {articles.length} مقال
          </span>
          {searchTerm && (
            <span className="text-sm text-gray-500">
              للبحث "{searchTerm}"
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="text-sm text-gray-500">
              في تصنيف {categories.find(c => c.name === selectedCategory)?.nameAr}
            </span>
          )}
        </div>
        
        {(searchTerm || selectedCategory !== 'all') && (
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
              setCurrentPage(1)
            }}
            className="text-sm text-primary hover:underline"
          >
            مسح الفلاتر
          </button>
        )}
      </div>

      {/* Articles Grid/List */}
      <AnimatePresence mode="wait">
        {paginatedArticles.length > 0 ? (
          <motion.div
            key={`${viewMode}-${currentPage}-${selectedCategory}-${searchTerm}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
                : 'space-y-4'
            }
          >
            {paginatedArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {viewMode === 'grid' ? (
                  <BlogPostCard
                    title={article.title}
                    imagePath={article.imagePath}
                    internalLink={`/blog/${article.slug}`}
                    category={article.category}
                  />
                ) : (
                  <ArticleListItem article={article} />
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-white p-12 text-center shadow-lg"
          >
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              لم يتم العثور على مقالات
            </h3>
            <p className="text-gray-600 mb-4">
              جرب تغيير كلمات البحث أو اختيار تصنيف مختلف
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setCurrentPage(1)
              }}
              className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors"
            >
              عرض جميع المقالات
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            السابق
          </button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded px-3 py-2 text-sm transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
          >
            التالي
          </button>
        </div>
      )}
    </div>
  )
}

// List view component for articles
function ArticleListItem({ article }: { article: Article }) {
  const categoryInfo = {
    'healthcare': { nameAr: 'الرعاية الصحية', emoji: '🏥' },
    'security': { nameAr: 'الأمن', emoji: '🛡️' },
    'aviation': { nameAr: 'الطيران', emoji: '✈️' },
    'hospitality': { nameAr: 'الضيافة', emoji: '🏨' },
    'industrial': { nameAr: 'الصناعة', emoji: '🏭' },
    'education': { nameAr: 'التعليم', emoji: '🎓' },
    'government': { nameAr: 'الحكومة', emoji: '🏛️' },
  }

  const catInfo = categoryInfo[article.category as keyof typeof categoryInfo] || 
    { nameAr: article.category, emoji: '📁' }

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={article.imagePath}
            alt={article.title}
            className="h-24 w-24 rounded-lg object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors line-clamp-2">
              <a href={`/blog/${article.slug}`}>
                {article.title}
              </a>
            </h3>
            <span className="flex-shrink-0 ml-2 text-lg">
              {catInfo.emoji}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {article.description}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              <span>{catInfo.nameAr}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{article.publishDate}</span>
            </div>
          </div>
          
          {article.tags.length > 0 && (
            <div className="mt-2 flex gap-1">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 