import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Government Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about government uniforms and official attire for Saudi Arabian public institutions.",
  alternates: {
    canonical: '/blog/category/government',
  },
}

export default function GovernmentBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 