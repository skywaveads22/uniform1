'use client'

import React from 'react'
import { ArticleSchema } from './components/StructuredData'

interface BlogSchemaProps {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  authorName: string
  slug: string
}

export default function BlogSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  slug,
}: BlogSchemaProps) {
  // Ensure image is an absolute URL
  const absoluteImage = image.startsWith('http')
    ? image
    : `https://fakhrkhaleej.com${image}`

  return (
    <ArticleSchema
      headline={title}
      image={absoluteImage}
      datePublished={datePublished}
      dateModified={dateModified || datePublished}
      authorName={authorName}
      publisherName="UniformSA"
      publisherLogo="https://fakhrkhaleej.com/images/logo.png"
      description={description}
    />
  )
} 