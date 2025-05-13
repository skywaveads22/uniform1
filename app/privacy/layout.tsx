import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | UniformSA",
  description: "UniformSA privacy policy. Information about how we collect, use, and protect your data when using our services and website.",
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 