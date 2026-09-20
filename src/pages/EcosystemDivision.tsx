import { Navigate, useParams } from "react-router-dom"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
import Button from "../components/ui/Button"
import { divisions } from "../data/content"

export default function EcosystemDivision() {
  const { slug } = useParams()
  const division = divisions.find((d) => d.slug === slug)

  if (!division) {
    return <Navigate to="/ecosystem" replace />
  }

  return (
    <div key={division.slug}>
      <PageHero
        eyebrow={division.tag}
        title={division.name}
        description={division.summary}
        image={division.image}
        imageAlt={division.imageAlt}
      />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <Reveal>
          <p className="text-lg text-slate">{division.description}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-10 text-xl font-bold text-navy">What this division does</h2>
        </Reveal>
        <Stagger className="mt-4 space-y-3">
          {division.highlights.map((h) => (
            <StaggerItem key={h} className="flex gap-3 text-slate">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
              {h}
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-4">
          <Button href={`https://${division.domain}`} variant="dark">
            Visit {division.tag}
          </Button>
          <Button to="/ecosystem" variant="outline">
            Back to Ecosystem
          </Button>
        </Reveal>
      </section>
    </div>
  )
}
