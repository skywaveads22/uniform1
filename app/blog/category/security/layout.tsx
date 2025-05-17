import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about security uniforms and protective attire for Saudi Arabian security personnel and companies.",
  alternates: {
    canonical: '/blog/category/security',
  },
}

export default function SecurityBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 