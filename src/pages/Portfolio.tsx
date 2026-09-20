import PageHero from "../components/PageHero"
import Tilt from "../components/motion/Tilt"
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
      <section className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <Stagger className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p, i) => (
            <StaggerItem key={p.name}>
              <Tilt className="h-full rounded-2xl" max={6}>
                <div className="card-ring group relative h-full overflow-hidden rounded-2xl border border-cloud bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/10">
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-red via-gold to-red bg-[length:200%_auto] transition-transform duration-500 group-hover:scale-x-100 motion-safe:animate-gradient"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-display text-lg font-bold text-navy transition-colors group-hover:text-red">
                      {String(i + 1).padStart(2, "0")} · {p.name}
                    </p>
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-red-glow to-gold motion-safe:animate-pulse-dot" />
                  </div>
                  <p className="mt-2 text-sm text-slate">{p.description}</p>
                  <span className="mt-4 inline-block rounded-full bg-cloud px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate transition-colors group-hover:bg-navy group-hover:text-white">
                    {p.status}
                  </span>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
