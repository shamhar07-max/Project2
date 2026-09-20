import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
import Tilt from "../components/motion/Tilt"
import Button from "../components/ui/Button"
import { divisions, jobsService } from "../data/content"

export default function Ecosystem() {
  return (
    <div>
      <PageHero
        eyebrow="Ecosystem"
        title="Four divisions. One company."
        description="Distinct divisional experiences, sharing one identity, one authorization model and one evidence standard."
      />
      <section className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <Stagger className="relative grid gap-6 sm:grid-cols-2">
          {divisions.map((d) => (
            <StaggerItem key={d.slug}>
              <Tilt className="h-full rounded-2xl" max={5}>
                <Link
                  to={`/ecosystem/${d.slug}`}
                  className="card-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-cloud bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/15"
                >
                  {d.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-cloud">
                      <img
                        src={d.image}
                        alt={d.imageAlt ?? ""}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:rotate-1 group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                      />
                      <span className="absolute bottom-3 left-3 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {d.tag}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-red">
                      {d.tag}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-bold text-navy transition-colors group-hover:text-red">{d.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{d.summary}</p>
                    <p className="mt-3 line-clamp-2 text-sm text-slate/80">{d.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red">Division overview</span>
                      <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white transition-all duration-300 group-hover:bg-red">→</span>
                    </span>
                  </div>
                </Link>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="relative mt-8">
          <div className="overflow-hidden rounded-2xl border border-cloud bg-gradient-to-br from-cloud via-white to-cloud p-8 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red">
                {jobsService.tag}
              </span>
              <h2 className="mt-2 font-display text-xl font-bold text-navy">{jobsService.name}</h2>
              <p className="mt-2 max-w-xl text-sm text-slate">{jobsService.description}</p>
            </div>
            <Button href={`https://${jobsService.domain}`} variant="gradient" className="mt-4 whitespace-nowrap sm:mt-0">
              Visit Jobs
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
