import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Uniform Blog & Articles | UniformSA",
  description: "The latest insights, trends, and information about uniforms for various industries in Saudi Arabia. Expert advice, guides, and industry news.",
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 