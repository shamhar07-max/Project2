import { motion } from "motion/react"
import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
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
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {divisions.map((d) => (
            <StaggerItem key={d.slug}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22 }} className="h-full">
                <Link
                  to={`/ecosystem/${d.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-cloud bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  {d.image && (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-cloud">
                      <img
                        src={d.image}
                        alt={d.imageAlt ?? ""}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-red">
                      {d.tag}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-navy">{d.name}</h2>
                    <p className="mt-3 text-sm text-slate">{d.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-transform group-hover:translate-x-1 group-hover:text-red">
                      Division overview <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-cloud bg-cloud p-8 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red">
                {jobsService.tag}
              </span>
              <h2 className="mt-2 text-xl font-bold text-navy">{jobsService.name}</h2>
              <p className="mt-2 text-sm text-slate">{jobsService.description}</p>
            </div>
            <Button href={`https://${jobsService.domain}`} variant="dark" className="whitespace-nowrap">
              Visit Jobs
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
