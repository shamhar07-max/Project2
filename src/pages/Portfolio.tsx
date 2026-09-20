import PageHero from "../components/PageHero"
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <div key={p.name} className="rounded-xl border border-cloud p-6">
              <p className="text-lg font-bold text-navy">{p.name}</p>
              <p className="mt-2 text-sm text-slate">{p.description}</p>
              <span className="mt-4 inline-block rounded-full bg-cloud px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
