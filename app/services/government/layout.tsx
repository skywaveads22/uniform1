import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Government Uniform Services | UniformSA",
  description: "Official government uniform services for Saudi Arabian public institutions. Professional attire that combines authority, dignity, and cultural considerations.",
  alternates: {
    canonical: '/services/government',
  },
}

export default function GovernmentServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 