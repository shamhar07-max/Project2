import Marquee from "./motion/Marquee"
import Reveal from "./motion/Reveal"
import Stagger, { StaggerItem } from "./motion/Stagger"
import { divisions, portfolio } from "../data/content"

// iOS-style proof strip: quiet chips in two slow tickers.
// Real names only — no invented logos.
export default function LogoTicker() {
  return (
    <div className="overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate">
          Proof across the ecosystem
        </p>
      </Reveal>
      <Reveal delay={0.08} className="mt-6">
        <Marquee durationSeconds={36}>
          {divisions.map((d) => (
            <span
              key={d.slug}
              className="whitespace-nowrap rounded-full bg-cloud px-5 py-2.5 text-sm font-semibold text-navy"
            >
              {d.name}
            </span>
          ))}
        </Marquee>
      </Reveal>
      <div className="mt-3">
        <Marquee durationSeconds={44} reverse>
          {portfolio.map((p) => (
            <span
              key={p.name}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-cloud bg-white px-5 py-2.5 text-sm font-medium text-slate"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              {p.name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

// iOS grouped KPI cards: white surface, hairline border, soft shadow,
// navy numerals with one red accent. No neon, no dark neon panels.
const kpis = [
  { value: 4, label: "Connected divisions", detail: "One identity" },
  { value: 13, label: "Domains, one platform", detail: "HQ + 12 builds" },
  { value: 10, label: "Portfolio ventures", detail: "In development" },
  { value: 7, label: "Industries served", detail: "And expanding" },
]

export function KpiBand() {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((k, i) => (
        <StaggerItem key={k.label}>
          <div className="h-full rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(16,39,60,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-16px_rgba(16,39,60,0.3)]">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate">{k.detail}</p>
            <p className="mt-2 text-5xl font-extrabold tracking-tight text-navy">
              {k.value}
            </p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-cloud" aria-hidden>
              <div
                className="h-full rounded-full bg-red"
                style={{ width: `${Math.min(100, 28 + i * 18)}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-medium text-ink">{k.label}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
