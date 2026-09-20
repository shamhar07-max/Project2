import { motion } from "motion/react"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
import Button from "../components/ui/Button"
import { divisions, jobsService } from "../data/content"

const intents = [
  {
    label: "I want to learn",
    body: "Explore technology and professional courses, bundles and learning paths.",
    to: "/ecosystem/academy",
    cta: "Explore Academy",
  },
  {
    label: "I'm building a product",
    body: "Start a discovery conversation with Studio before committing to a build.",
    to: "/ecosystem/studio",
    cta: "Explore Studio",
  },
  {
    label: "I run a business",
    body: "Diagnose operational loss and design measured, bounded automation.",
    to: "/ecosystem/business-ai",
    cta: "Explore Business AI",
  },
  {
    label: "I'm a professional or employer",
    body: "Build a verified capability profile, or search evidence-backed talent.",
    to: "/ecosystem/verified-talent",
    cta: "Explore Verified Talent",
  },
]

export default function GetStarted() {
  return (
    <div>
      <PageHero
        eyebrow="Get Started"
        title="Choose how you want to engage"
        description="Learner, founder, business owner or employer — pick the entry point that matches you."
      />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {intents.map((intent) => {
            const division = divisions.find((d) => intent.to.endsWith(d.slug))
            return (
              <StaggerItem key={intent.label}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full rounded-xl border border-cloud p-8">
                  <h3 className="text-xl font-bold text-navy">{intent.label}</h3>
                  <p className="mt-3 text-sm text-slate">{intent.body}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button to={intent.to} variant="dark">
                      {intent.cta}
                    </Button>
                    {division && (
                      <Button href={`https://${division.domain}`} variant="outline">
                        Go to {division.tag}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-cloud bg-cloud p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-bold text-navy">I'm looking for a job</h3>
              <p className="mt-2 text-sm text-slate">
                An Academy credential is not required for every applicant — Jobs is an open,
                connected opportunity marketplace.
              </p>
            </div>
            <Button href={`https://${jobsService.domain}`} variant="primary" className="whitespace-nowrap">
              Visit Jobs
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
