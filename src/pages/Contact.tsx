import { AnimatePresence, motion } from "motion/react"
import { type FormEvent, useState } from "react"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Button from "../components/ui/Button"

const inputCls =
  "peer mt-1 block w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-ink placeholder-transparent shadow-sm transition-all duration-300 focus:-translate-y-0.5 focus:border-red focus:outline-none focus:ring-4 focus:ring-red/15 hover:border-navy/30"

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
      <section className="relative mx-auto max-w-xl px-6 py-16 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative overflow-hidden rounded-2xl border border-cloud bg-gradient-to-br from-cloud via-white to-cloud p-8 text-center shadow-xl"
            >
              <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red/15 blur-2xl motion-safe:animate-aurora" />
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 14 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-glow text-white shadow-lg shadow-red/40"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              <p className="mt-4 font-display text-lg font-bold text-navy">Thank you.</p>
              <p className="mt-2 text-sm text-slate">
                Your enquiry has been recorded. Our team will respond as soon as possible.
              </p>
            </motion.div>
          ) : (
            <Reveal key="form" className="relative">
              <form onSubmit={handleSubmit} className="card-ring space-y-5 rounded-2xl border border-cloud bg-white p-7 shadow-xl shadow-navy/5">
                <div className="relative">
                  <input id="name" name="name" type="text" required placeholder="Name" className={inputCls} />
                  <label htmlFor="name" className="pointer-events-none absolute -top-2.5 left-3 rounded-full bg-white px-2 text-xs font-semibold text-navy transition-colors peer-focus:text-red">
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" required placeholder="Email" className={inputCls} />
                  <label htmlFor="email" className="pointer-events-none absolute -top-2.5 left-3 rounded-full bg-white px-2 text-xs font-semibold text-navy transition-colors peer-focus:text-red">
                    Email
                  </label>
                </div>
                <div className="relative">
                  <textarea id="message" name="message" required rows={5} placeholder="Message" className={`${inputCls} resize-none`} />
                  <label htmlFor="message" className="pointer-events-none absolute -top-2.5 left-3 rounded-full bg-white px-2 text-xs font-semibold text-navy transition-colors peer-focus:text-red">
                    Message
                  </label>
                </div>
                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  Send message →
                </Button>
                <p className="text-center text-xs text-slate/70">
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
