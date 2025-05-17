import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about healthcare uniforms and medical attire for Saudi healthcare institutions.",
  alternates: {
    canonical: '/blog/category/healthcare',
  },
}

export default function HealthcareBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 