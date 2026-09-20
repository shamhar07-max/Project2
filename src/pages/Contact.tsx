import { AnimatePresence, motion } from "motion/react"
import { type FormEvent, useState } from "react"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Button from "../components/ui/Button"

// iOS grouped form: tinted field fills, hairline borders, navy focus ring.
const inputCls =
  "mt-1 block w-full rounded-2xl border border-transparent bg-cloud px-4 py-3.5 text-ink placeholder:text-slate/60 transition-all duration-200 hover:bg-navy/5 focus:border-navy/30 focus:bg-white focus:outline-none focus:ring-4 focus:ring-navy/10"

const labelCls = "mb-1 block text-[13px] font-semibold text-navy"

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
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="rounded-3xl border border-navy/5 bg-white p-8 text-center shadow-[0_24px_48px_-16px_rgba(16,39,60,0.28)]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 16 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <p className="mt-4 text-lg font-bold text-navy">Thank you.</p>
              <p className="mt-2 text-sm text-slate">
                Your enquiry has been recorded. Our team will respond as soon as possible.
              </p>
            </motion.div>
          ) : (
            <Reveal key="form">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-navy/5 bg-white p-7 shadow-[0_24px_48px_-16px_rgba(16,39,60,0.25)]">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="message" className={labelCls}>
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={5} placeholder="How can we help?" className={`${inputCls} resize-none`} />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send message
                </Button>
                <p className="text-center text-xs text-slate">
                  Prefer a guided path? <a href="/get-started" className="font-semibold text-navy hover:text-red">Get started →</a>
                </p>
              </form>
            </Reveal>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
