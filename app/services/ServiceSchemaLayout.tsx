'use client'

import React from 'react'
import { ProductSchema } from '../components/StructuredData'
import { toAbsoluteUrl } from '@/lib/utils'

interface ServiceSchemaLayoutProps {
  children: React.ReactNode
  name: string
  description: string
  image: string
  category: string
}

export default function ServiceSchemaLayout({
  children,
  name,
  description,
  image,
  category,
}: ServiceSchemaLayoutProps) {
  return (
    <>
      {children}
      
      <ProductSchema
        name={name}
        description={description}
        image={toAbsoluteUrl(image)}
        brand="UniformSA"
      />
    </>
  )
} 