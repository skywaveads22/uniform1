"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const services = [
  { name: "Uniform Program Management", href: "/services/uniform-program-management" },
  { name: "Custom Design & Branding", href: "/services/custom-design-branding" },
  { name: "Bulk Ordering", href: "/services/bulk-ordering" },
  { name: "Measurement Services", href: "/services/measurement" },
  { name: "Corporate Uniform Policies", href: "/services/uniform-policies" },
]

// Blog categories for dropdown
const blogCategories = [
  { name: "All Articles", href: "/blog" },
  { name: "Aviation", href: "/blog/category/aviation" },
  { name: "Education", href: "/blog/category/education" },
  { name: "Government", href: "/blog/category/government" },
  { name: "Healthcare", href: "/blog/category/healthcare" },
  { name: "Hospitality", href: "/blog/category/hospitality" },
  { name: "Industrial", href: "/blog/category/industrial" },
  { name: "Security", href: "/blog/category/security" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        mobileMenuRef.current.style.height = `${mobileMenuRef.current.scrollHeight}px`
        mobileMenuRef.current.style.opacity = '1'
      } else {
        mobileMenuRef.current.style.height = '0'
        mobileMenuRef.current.style.opacity = '0'
      }
    }
  }, [isMobileMenuOpen])

  return (
    <nav className="sticky top-0 z-50 border-b bg-white shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Uniform</span>
            <span className="text-2xl font-light dark:text-white">SA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary dark:text-white dark:hover:text-primary">
                <span>Services</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 origin-top-left opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:opacity-100">
                <div className="rounded-lg bg-white py-1 ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white dark:text-white dark:hover:bg-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary dark:text-white dark:hover:text-primary">
                <span>Blog</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 origin-top-left opacity-0 shadow-lg transition-all duration-200 ease-out group-hover:opacity-100">
                <div className="rounded-lg bg-white py-1 ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700">
                  {blogCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white dark:text-white dark:hover:bg-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary dark:text-white dark:hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary dark:text-white dark:hover:text-primary">
              Contact
            </Link>
            <Link
              href="/request-quote"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              Request Quote
            </Link>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:text-white dark:hover:bg-gray-800"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className="border-b bg-white overflow-hidden transition-all duration-300 ease-in-out h-0 opacity-0 md:hidden dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="container mx-auto space-y-1 px-4 pb-4 pt-2">
          {/* Mobile Services Menu */}
          <div className="pt-2">
            <div className="px-3 pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Services</div>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
              >
                {service.name}
              </Link>
            ))}
          </div>

          {/* Mobile Blog Menu */}
          <div className="border-t pt-2 dark:border-gray-700">
            <div className="px-3 pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Blog</div>
            {blogCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
              >
                {category.name}
              </Link>
            ))}
          </div>

          <div className="border-t pt-4 dark:border-gray-700">
            <Link
              href="/about"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/request-quote"
              className="mt-4 block rounded-lg bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary/90"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 