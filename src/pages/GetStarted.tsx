import { Link } from "react-router-dom"
import PageHero from "../components/PageHero"
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
        <div className="grid gap-6 sm:grid-cols-2">
          {intents.map((intent) => {
            const division = divisions.find((d) => intent.to.endsWith(d.slug))
            return (
              <div key={intent.label} className="rounded-xl border border-cloud p-8">
                <h3 className="text-xl font-bold text-navy">{intent.label}</h3>
                <p className="mt-3 text-sm text-slate">{intent.body}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={intent.to}
                    className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                  >
                    {intent.cta}
                  </Link>
                  {division && (
                    <a
                      href={`https://${division.domain}`}
                      className="rounded-md border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-cloud"
                    >
                      Go to {division.tag}
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-cloud bg-cloud p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-bold text-navy">I'm looking for a job</h3>
            <p className="mt-2 text-sm text-slate">
              An Academy credential is not required for every applicant — Jobs is an open,
              connected opportunity marketplace.
            </p>
          </div>
          <a
            href={`https://${jobsService.domain}`}
            className="whitespace-nowrap rounded-md bg-red px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Visit Jobs
          </a>
        </div>
      </section>
    </div>
  )
}
