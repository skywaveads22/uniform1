import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Educational Uniforms in Saudi Arabia | UniformSA",
  description: "Quality school and educational uniforms for Saudi Arabian institutions. Durable, comfortable attire that promotes institutional identity.",
  alternates: {
    canonical: '/education',
  },
}

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 