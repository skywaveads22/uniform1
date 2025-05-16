import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hospitality Uniform Articles & Blogs | UniformSA",
  description: "Latest articles, guides, and news about hospitality uniforms and attire for Saudi Arabian hotels, restaurants, and service industry.",
  alternates: {
    canonical: '/blog/category/hospitality',
  },
}

export default function HospitalityBlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 