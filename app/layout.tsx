import * as React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { OrganizationSchema } from "./components/StructuredData"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Optimize font display
})

// Define the base URL for the site
const baseUrl = 'https://fakhrkhaleej.com'

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "UniformSA - Professional Uniforms in Saudi Arabia",
    template: "%s | UniformSA"
  },
  description: "High-quality uniforms designed specifically for the Saudi market, combining comfort, durability, and cultural sensitivity.",
  alternates: {
    canonical: '/',
  },
  keywords: ["uniforms", "Saudi Arabia", "workwear", "corporate uniform", "professional attire", "KSA"],
  authors: [{ name: "UniformSA Team" }],
  creator: "UniformSA",
  publisher: "UniformSA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'UniformSA',
    title: 'UniformSA - Professional Uniforms in Saudi Arabia',
    description: 'High-quality uniforms designed specifically for the Saudi market, combining comfort, durability, and cultural sensitivity.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'UniformSA - Professional Uniforms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UniformSA - Professional Uniforms in Saudi Arabia',
    description: 'High-quality uniforms designed specifically for the Saudi market, combining comfort, durability, and cultural sensitivity.',
    images: [`${baseUrl}/images/og-image.jpg`],
    creator: '@uniformsa',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon links */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/favicon-256.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        
        {/* Structured Data */}
        <OrganizationSchema 
          name="UniformSA"
          url="https://fakhrkhaleej.com"
          logo="https://fakhrkhaleej.com/images/logo.png"
          sameAs={[
            "https://facebook.com/uniformsa",
            "https://twitter.com/uniformsa",
            "https://instagram.com/uniformsa",
            "https://linkedin.com/company/uniformsa"
          ]}
        />
      </body>
    </html>
  )
} 