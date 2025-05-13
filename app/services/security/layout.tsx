import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Uniform Services | UniformSA",
  description: "Professional security uniform services for Saudi Arabian security personnel and companies. Durable, functional designs with authoritative appearance.",
  alternates: {
    canonical: '/services/security',
  },
}

export default function SecurityServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 