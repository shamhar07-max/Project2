import { type FormEvent, useState } from "react"
import PageHero from "../components/PageHero"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Corporate enquiries"
        description="For division-specific questions, reach out from that division's own page."
      />
      <section className="mx-auto max-w-xl px-6 py-16 lg:px-8">
        {submitted ? (
          <div className="rounded-xl border border-cloud bg-cloud p-8 text-center">
            <p className="text-lg font-semibold text-navy">Thank you.</p>
            <p className="mt-2 text-sm text-slate">
              Your enquiry has been recorded. Our team will respond as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-cloud px-4 py-2.5 text-ink focus:border-navy focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-cloud px-4 py-2.5 text-ink focus:border-navy focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 block w-full rounded-md border border-cloud px-4 py-2.5 text-ink focus:border-navy focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-red px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Send message
            </button>
          </form>
        )}
      </section>
    </div>
  )
}
