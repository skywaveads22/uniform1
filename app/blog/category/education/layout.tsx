import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about educational uniforms and school attire for Saudi Arabian educational institutions.",
  alternates: {
    canonical: '/blog/category/education',
  },
}

export default function EducationBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 