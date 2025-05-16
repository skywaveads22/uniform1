import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at UniformSA | Join Our Team",
  description: "Explore career opportunities at Saudi Arabia's leading uniform provider. Join our team and contribute to excellence in uniform solutions.",
  alternates: {
    canonical: '/careers',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 