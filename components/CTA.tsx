import Link from 'next/link';

export function CTA() {
  return (
    <div className="bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to elevate your organization's image?
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Talk to our uniform specialists today to discover how the right uniforms can enhance your brand identity, improve staff morale, and create a lasting impression.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/request-quote"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a quote
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
              Contact us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 