import { motion } from "motion/react"
import PageHero from "../components/PageHero"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
import { portfolio } from "../data/content"

export default function Portfolio() {
  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title="Verified work across the ecosystem"
        description="Each project is described according to its actual verified status — not every listed project is commercially launched."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <StaggerItem key={p.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-3xl border border-navy/5 bg-white p-6 shadow-[0_12px_32px_-16px_rgba(16,39,60,0.2)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-16px_rgba(16,39,60,0.28)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg font-bold text-navy">
                    {String(i + 1).padStart(2, "0")} · {p.name}
                  </p>
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red" />
                </div>
                <p className="mt-2 text-sm text-slate">{p.description}</p>
                <span className="mt-4 inline-block rounded-full bg-cloud px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate">
                  {p.status}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
