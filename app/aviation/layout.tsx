import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviation Uniforms in Saudi Arabia | UniformSA",
  description: "Premium aviation uniforms for airlines and airport staff in Saudi Arabia. Combining elegance, functionality, and industry compliance.",
  alternates: {
    canonical: '/aviation',
  },
}

export default function AviationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 