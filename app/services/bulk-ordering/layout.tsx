import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bulk Uniform Ordering Services | UniformSA",
  description: "Efficient bulk ordering services for organizations across Saudi Arabia. Volume discounts, quality assurance, and streamlined procurement.",
  alternates: {
    canonical: '/services/bulk-ordering',
  },
}

export default function BulkOrderingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 