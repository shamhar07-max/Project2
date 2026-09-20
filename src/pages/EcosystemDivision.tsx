import { Link, Navigate, useParams } from "react-router-dom"
import PageHero from "../components/PageHero"
import { divisions } from "../data/content"

export default function EcosystemDivision() {
  const { slug } = useParams()
  const division = divisions.find((d) => d.slug === slug)

  if (!division) {
    return <Navigate to="/ecosystem" replace />
  }

  return (
    <div>
      <PageHero eyebrow={division.tag} title={division.name} description={division.summary} />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <p className="text-lg text-slate">{division.description}</p>

        <h2 className="mt-10 text-xl font-bold text-navy">What this division does</h2>
        <ul className="mt-4 space-y-3">
          {division.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-slate">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`https://${division.domain}`}
            className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Visit {division.tag}
          </a>
          <Link
            to="/ecosystem"
            className="rounded-md border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:bg-cloud"
          >
            Back to Ecosystem
          </Link>
        </div>
      </section>
    </div>
  )
}
