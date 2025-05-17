import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industrial Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about industrial uniforms and workwear for Saudi Arabian industrial and manufacturing sectors.",
  alternates: {
    canonical: '/blog/category/industrial',
  },
}

export default function IndustrialBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 