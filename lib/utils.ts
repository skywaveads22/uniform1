import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class names and tailwind classes safely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generate a valid URL by concatenating base and path
 */
export function createUrl(base: string, path: string): string {
  // Remove trailing slash from base if present
  const baseWithoutTrailingSlash = base.endsWith('/') ? base.slice(0, -1) : base
  
  // Remove leading slash from path if present
  const pathWithoutLeadingSlash = path.startsWith('/') ? path.slice(1) : path
  
  return `${baseWithoutTrailingSlash}/${pathWithoutLeadingSlash}`
}

/**
 * Ensures a URL is absolute by prefixing with base URL if needed
 */
export function toAbsoluteUrl(url: string, baseUrl: string = 'https://fakhrkhaleej.com'): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  
  return createUrl(baseUrl, url)
}

/**
 * Format a date in a locale-friendly way
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Truncate a text to a specific length with ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text
  
  return text.slice(0, maxLength).trim() + '...'
} 