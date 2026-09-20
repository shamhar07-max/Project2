import { AnimatePresence, motion } from "motion/react"
import { type FormEvent, useState } from "react"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Button from "../components/ui/Button"

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
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border border-cloud bg-cloud p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <p className="mt-4 text-lg font-semibold text-navy">Thank you.</p>
              <p className="mt-2 text-sm text-slate">
                Your enquiry has been recorded. Our team will respond as soon as possible.
              </p>
            </motion.div>
          ) : (
            <Reveal key="form">
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
                    className="mt-1 block w-full rounded-md border border-cloud px-4 py-2.5 text-ink transition-colors focus:border-navy focus:outline-none"
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
                    className="mt-1 block w-full rounded-md border border-cloud px-4 py-2.5 text-ink transition-colors focus:border-navy focus:outline-none"
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
                    className="mt-1 block w-full rounded-md border border-cloud px-4 py-2.5 text-ink transition-colors focus:border-navy focus:outline-none"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send message
                </Button>
              </form>
            </Reveal>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
