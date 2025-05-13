import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | UniformSA",
  description: "Terms and conditions for using UniformSA services and products. Important information about ordering, delivery, and business relationships.",
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 