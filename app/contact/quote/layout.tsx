import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact for Uniform Quote | UniformSA",
  description: "Contact our team for a customized uniform quote tailored to your organization's specific needs. Fast response and competitive pricing guaranteed.",
  alternates: {
    canonical: '/contact/quote',
  },
}

export default function ContactQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 