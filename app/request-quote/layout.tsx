import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Uniform Quote | UniformSA",
  description: "Request a custom uniform quote for your organization. Get tailored solutions that meet your specific requirements with competitive pricing.",
  alternates: {
    canonical: '/request-quote',
  },
}

export default function RequestQuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 