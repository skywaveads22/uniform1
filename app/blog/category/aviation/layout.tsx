import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviation Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about aviation uniforms and airline attire for Saudi Arabian aviation industry and airports.",
  alternates: {
    canonical: '/blog/category/aviation',
  },
}

export default function AviationBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 