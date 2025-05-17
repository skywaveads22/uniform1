import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About UniformSA | Saudi Arabia's Premier Uniform Provider",
  description: "Learn about UniformSA, Saudi Arabia's leading uniform provider with over two decades of experience delivering exceptional quality and culturally appropriate attire.",
  alternates: {
    canonical: '/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 