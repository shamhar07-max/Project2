import { motion } from "motion/react"
import Logo from "./Logo"

const journey = ["Learn", "Build", "Verify", "Progress"]

const chips = [
  { label: "Academy", top: "6%", left: "-8%", delay: 0 },
  { label: "Studio", top: "68%", left: "-12%", delay: 0.6 },
  { label: "Business AI", top: "-6%", left: "58%", delay: 1.1 },
  { label: "Verified Talent", top: "80%", left: "62%", delay: 1.7 },
]

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
      {/* ambient background blobs — animated aurora */}
      <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-red/25 blur-3xl motion-safe:animate-aurora" aria-hidden />
      <div className="absolute -bottom-14 -left-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl motion-safe:animate-aurora" style={{ animationDelay: "-6s" }} aria-hidden />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 motion-safe:animate-spin-slow" style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(227,27,35,0.35) 12%, transparent 25%, transparent 55%, rgba(199,164,94,0.35) 68%, transparent 80%)" }} />

      {/* dot grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        aria-hidden
      >
        <defs>
          <pattern id="hero-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      {/* floating division chips */}
      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          className="absolute z-20 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:block"
          style={{ top: chip.top, left: chip.left }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, delay: chip.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {chip.label}
        </motion.div>
      ))}

      {/* main credential card */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        whileHover={{ rotate: 0, y: -4 }}
        className="relative z-10 mx-auto mt-10 w-full max-w-sm rounded-2xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur"
      >
        <div className="flex items-center justify-between">
          <Logo variant="icon" className="h-9 w-9 rounded-md" />
          <span className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 6L9 17l-5-5"
                stroke="#10273C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Verified
          </span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate">
          Evidence Record
        </p>
        <p className="mt-1 text-lg font-bold text-navy">AI Automation &amp; Applications</p>
        <p className="text-sm text-slate">DB-04 · DigitalBurj Academy</p>

        <div className="mt-6 flex items-center justify-between">
          {journey.map((step, i) => (
            <div key={step} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${
                    i <= 2 ? "bg-red text-white" : "bg-cloud text-slate"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-[11px] font-medium text-slate">{step}</span>
              </div>
              {i < journey.length - 1 && (
                <div className={`mx-1 h-0.5 flex-1 ${i < 2 ? "bg-red" : "bg-cloud"}`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
