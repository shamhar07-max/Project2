import { Link } from "react-router-dom"
import Logo from "../components/Logo"
import { divisions, industries, jobsService, portfolio } from "../data/content"

const steps = [
  {
    step: "Learn",
    body: "Structured, practical technology and professional education with real assessments — not passive content.",
  },
  {
    step: "Build",
    body: "Validation-first product and process delivery, from discovery to a build, reshape or stop decision.",
  },
  {
    step: "Verify",
    body: "Independent verification kept separate from self-reported experience and initial approval.",
  },
  {
    step: "Progress",
    body: "Evidence carries forward into a capability profile that employers and clients can actually trust.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Introduction */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-red">
              People. Technology. Opportunity.
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              A higher tomorrow, built on evidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              DigitalBurj connects practical education, technology delivery, business
              intelligence and evidence-backed professional opportunity in one coordinated
              ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/get-started"
                className="rounded-md bg-red px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Get Started
              </Link>
              <Link
                to="/ecosystem"
                className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">About</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              One company. One connected platform.
            </h2>
            <p className="mt-5 text-lg text-slate">
              DigitalBurj operates distinct divisional experiences under one company, sharing
              accounts, authorization, operational services and evidence records across the
              ecosystem. Every division follows the same core narrative: Learn, Build, Verify,
              Progress.
            </p>
            <Link
              to="/company/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-red"
            >
              More about DigitalBurj <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="rounded-xl border border-cloud bg-white p-6 shadow-sm">
                <p className="text-lg font-bold text-navy">{s.step}</p>
                <p className="mt-2 text-sm text-slate">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four divisions */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">Ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Four divisions, one recognition device.
            </h2>
            <p className="mt-5 text-lg text-slate">
              Each division carries the same DigitalBurj mark, distinguished by a text
              descriptor rather than an invented replacement symbol.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d) => (
              <Link
                key={d.slug}
                to={`/ecosystem/${d.slug}`}
                className="group flex flex-col rounded-xl border border-cloud bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-red">
                  {d.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy">{d.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate">{d.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-red">
                  Learn more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-cloud bg-white p-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red">
                {jobsService.tag}
              </span>
              <p className="mt-1 text-sm text-slate">{jobsService.summary}</p>
            </div>
            <a
              href={`https://${jobsService.domain}`}
              className="whitespace-nowrap rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
            >
              Visit Jobs
            </a>
          </div>
        </div>
      </section>

      {/* How DigitalBurj works */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">
            How DigitalBurj works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            One identity, evidence that carries forward.
          </h2>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Discover the company and choose a division",
            "Sign in once with a shared DigitalBurj identity",
            "Learn, build or engage inside the right workspace",
            "Evidence and outcomes carry into your profile",
          ].map((item, i) => (
            <li key={item} className="relative pl-12">
              <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm text-slate">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Technology */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red">Technology</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Engineering built for authorization, evidence and reliability.
              </h2>
              <p className="mt-5 text-lg text-white/80">
                Server-side authorization, tenant isolation, idempotent handling of risky
                mutations, audited evidence issuance and tested recovery run beneath every
                division — with approved models, privacy controls and human review wherever AI
                is involved.
              </p>
              <Link
                to="/technology"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-red"
              >
                Explore our technology <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8">
              <Logo variant="icon" className="h-16 w-16 rounded-lg" />
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li>Shared identity, sessions and organizations</li>
                <li>One authenticated workspace across every division</li>
                <li>A controlled API boundary, not an open surface</li>
                <li>Independent verification, separate from initial approval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Verified work across the ecosystem.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="whitespace-nowrap text-sm font-semibold text-navy hover:text-red"
          >
            View full portfolio →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {portfolio.slice(0, 5).map((p) => (
            <div key={p.name} className="rounded-xl border border-cloud p-5">
              <p className="font-bold text-navy">{p.name}</p>
              <p className="mt-1 text-sm text-slate">{p.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate/70">
                {p.status}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">Industries</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Sectors we work alongside.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-navy"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">People</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Direct, precise and evidence-led.
            </h2>
            <p className="mt-5 text-lg text-slate">
              We show actual work and real people rather than fictional metrics or sweeping
              guarantees. Technical claims stay understandable, and examples are verified before
              they are published.
            </p>
          </div>
          <div className="rounded-xl border border-cloud bg-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-navy">What we do not promise</p>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              <li>Guaranteed employment, visas, or earnings</li>
              <li>Instant capability or unverified performance figures</li>
              <li>Employment or licensing rules presented as universal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get started */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Choose how you want to engage.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Learner, founder, business or employer — get started takes you to the right entry
            point.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/get-started"
              className="rounded-md bg-red px-8 py-3 text-base font-semibold text-white hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
