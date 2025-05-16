import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy | UniformSA',
  description: 'Our privacy policy outlining how we protect your data and respect your privacy.',
}

export default function PrivacyPolicyRedirect() {
  // Server-side redirect
  redirect('/privacy')
  
  // This part is only for static generation and won't be executed
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="mb-4 text-lg text-gray-600">You are being redirected to our Privacy Policy page.</p>
        <div className="mt-4">
          <Link 
            href="/privacy"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
          >
            Click here if you're not redirected
          </Link>
        </div>
      </div>
    </div>
  )
} 