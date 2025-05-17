import React from 'react'

interface OrganizationProps {
  name: string
  url: string
  logo: string
  sameAs?: string[]
}

export function OrganizationSchema({ name, url, logo, sameAs = [] }: OrganizationProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressRegion: 'Riyadh Province',
      addressCountry: 'Saudi Arabia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-XXXXXXXX',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}

interface BreadcrumbListProps {
  items: {
    name: string
    item: string
  }[]
}

export function BreadcrumbListSchema({ items }: BreadcrumbListProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

interface ArticleProps {
  headline: string
  image: string
  datePublished: string
  dateModified: string
  authorName: string
  publisherName: string
  publisherLogo: string
  description: string
}

export function ArticleSchema({
  headline,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
  description,
}: ArticleProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    description,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}

interface ProductProps {
  name: string
  image: string
  description: string
  sku?: string
  brand?: string
  offers?: {
    price: number
    priceCurrency: string
    availability: string
  }
}

export function ProductSchema({
  name,
  image,
  description,
  sku,
  brand,
  offers,
}: ProductProps) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    image,
    description,
    ...(sku && { sku }),
    ...(brand && {
      brand: {
        '@type': 'Brand',
        name: brand,
      },
    }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  )
} 