"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

interface BlogCardProps {
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  category: string
  slug: string
}

export function BlogCard({
  title,
  excerpt,
  coverImage,
  date,
  author,
  category,
  slug,
}: BlogCardProps) {
  return (
    <div className="opacity-100 transition-all">
      <Link href={`/blog/${slug}`} className="group">
        <Card className="overflow-hidden transition-shadow hover:shadow-lg">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
              {category}
            </div>
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(date), "dd MMMM yyyy", { locale: ar })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
} 