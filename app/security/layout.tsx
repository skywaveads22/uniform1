import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Uniforms in Saudi Arabia | UniformSA",
  description: "Professional security uniforms for Saudi Arabian security personnel. Durable, functional design with authoritative appearance.",
  alternates: {
    canonical: '/security',
  },
}

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 