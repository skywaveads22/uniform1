import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quick Quote Request | UniformSA",
  description: "Request a quick quote for your uniform needs in Saudi Arabia with our simplified form.",
}

export default function QuickQuotePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">Quick Quote Request</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Use this simplified form for a fast quote estimate. For detailed quotes with more options, 
            please visit our <Link href="/request-quote" className="text-primary hover:underline">full quote request page</Link>.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium leading-none">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  placeholder="+966"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium leading-none">
                  Uniform Category
                </label>
                <select
                  id="category"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                >
                  <option value="" disabled selected>Select category</option>
                  <option value="aviation">Aviation</option>
                  <option value="education">Education</option>
                  <option value="government">Government</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="industrial">Industrial</option>
                  <option value="security">Security</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity" className="text-sm font-medium leading-none">
                Approximate Quantity
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder="Number of uniform pieces"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium leading-none">
                Brief Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder="Please briefly describe your uniform requirements"
                required
              ></textarea>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="urgent"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="urgent" className="text-sm font-medium leading-none">
                This is an urgent request (delivery needed within 2 weeks)
              </label>
            </div>

            <div className="space-y-6">
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Request Quick Quote
              </button>
              
              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you agree to our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and 
                consent to being contacted regarding your quote request.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need a more detailed consultation?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact our team directly
            </Link>
            {" "}or call us at +966 12 345 6789
          </p>
        </div>
      </div>
    </div>
  )
} 