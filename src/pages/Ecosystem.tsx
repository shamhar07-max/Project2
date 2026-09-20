import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import { divisions, jobsService } from "../data/content"

export default function Ecosystem() {
  return (
    <div>
      <PageHero
        eyebrow="Ecosystem"
        title="Four divisions. One company."
        description="Distinct divisional experiences, sharing one identity, one authorization model and one evidence standard."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {divisions.map((d) => (
            <Link
              key={d.slug}
              to={`/ecosystem/${d.slug}`}
              className="group flex flex-col rounded-xl border border-cloud bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-red">
                {d.tag}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-navy">{d.name}</h2>
              <p className="mt-3 text-sm text-slate">{d.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-red">
                Division overview <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-cloud bg-cloud p-8 sm:flex-row sm:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red">
              {jobsService.tag}
            </span>
            <h2 className="mt-2 text-xl font-bold text-navy">{jobsService.name}</h2>
            <p className="mt-2 text-sm text-slate">{jobsService.description}</p>
          </div>
          <a
            href={`https://${jobsService.domain}`}
            className="whitespace-nowrap rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Visit Jobs
          </a>
        </div>
      </section>
    </div>
  )
}
