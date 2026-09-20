import { motion } from "motion/react"
import Marquee from "./motion/Marquee"
import Reveal from "./motion/Reveal"
import Stagger, { StaggerItem } from "./motion/Stagger"
import Tilt from "./motion/Tilt"
import { divisions, portfolio } from "../data/content"

// Lively ecosystem proof strip: divisions + portfolio names in two
// counter-scrolling tickers. Real names only — no invented logos.
export default function LogoTicker() {
  return (
    <div className="overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate/70">
          Proof across the ecosystem
        </p>
      </Reveal>
      <Reveal delay={0.08} className="mt-6">
        <Marquee durationSeconds={30}>
          {divisions.map((d) => (
            <span
              key={d.slug}
              className="whitespace-nowrap rounded-full border border-navy/15 bg-white px-5 py-2.5 font-display text-sm font-semibold text-navy shadow-sm"
            >
              {d.name}
            </span>
          ))}
        </Marquee>
      </Reveal>
      <div className="mt-4">
        <Marquee durationSeconds={36} reverse>
          {portfolio.map((p) => (
            <span
              key={p.name}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white/90"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-glow to-gold motion-safe:animate-pulse-dot" />
              {p.name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

// Animated KPI band with gradient cards + sparklines.
const kpis = [
  { value: 4, suffix: "", label: "Connected divisions", delta: "One identity", spark: [4, 6, 5, 8, 7, 10, 9] },
  { value: 13, suffix: "", label: "Domains, one platform", delta: "HQ + 12 builds", spark: [3, 5, 4, 7, 9, 8, 12] },
  { value: 10, suffix: "+", label: "Portfolio ventures", delta: "In development", spark: [2, 3, 5, 4, 7, 8, 10] },
  { value: 7, suffix: "", label: "Industries served", delta: "And expanding", spark: [1, 2, 4, 3, 5, 6, 7] },
]

function Spark({ points }: { points: number[] }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const w = 120
  const h = 32
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w
      const y = h - 4 - ((p - min) / Math.max(1, max - min)) * (h - 8)
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(" ")
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-8 w-full" aria-hidden>
      <defs>
        <linearGradient id="kpi-spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e31b23" />
          <stop offset="100%" stopColor="#c7a45e" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="url(#kpi-spark)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function KpiBand() {
  return (
    <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k) => (
        <StaggerItem key={k.label}>
          <Tilt className="h-full rounded-2xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.22 }}
              className="card-ring h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy via-navy to-navy-deep p-6 text-white shadow-xl"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-red/25 blur-2xl motion-safe:animate-aurora"
              />
              <p className="font-display text-4xl font-bold">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {k.value}
                </motion.span>
                <span className="text-gradient-gold motion-safe:animate-gradient">{k.suffix}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-white">{k.label}</p>
              <p className="text-xs text-white/60">{k.delta}</p>
              <Spark points={k.spark} />
            </motion.div>
          </Tilt>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
