import { motion } from "motion/react"
import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import Carousel from "../components/ui/Carousel"
import Faq from "../components/Faq"
import Stats from "../components/Stats"
import Tilt from "../components/motion/Tilt"
import LogoTicker, { KpiBand } from "../components/Proof"
import HeroVisual from "../components/HeroVisual"
import Logo from "../components/Logo"
import Marquee from "../components/motion/Marquee"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
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

const facts = [
  { value: 4, label: "Connected divisions" },
  { value: 13, label: "Domains, one platform" },
  { value: 1, label: "Shared identity" },
  { value: 22, label: "Technology programs" },
]

export default function Home() {
  return (
    <div>
      {/* Introduction / Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src="/images/hero-team.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(16,39,60,0.97) 20%, rgba(16,39,60,0.85) 45%, rgba(16,39,60,0.6) 75%), radial-gradient(circle at 15% 20%, rgba(227,27,35,0.2), transparent 40%)",
          }}
          aria-hidden
        />
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-red/25 blur-3xl motion-safe:animate-aurora" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl motion-safe:animate-aurora" style={{ animationDelay: "-6s" }} />
          <div className="absolute inset-0 bg-grid-navy opacity-60" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-glow to-gold motion-safe:animate-pulse-dot" />
              People. Technology. Opportunity.
            </motion.p>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              A higher tomorrow,{" "}
              <span className="text-gradient motion-safe:animate-gradient">built on evidence.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80">
              DigitalBurj connects practical education, technology delivery, business
              intelligence and evidence-backed professional opportunity in one coordinated
              ecosystem.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/get-started" variant="glow" size="lg" icon={<ArrowIcon />}>
                Get Started
              </Button>
              <Button to="/ecosystem" variant="glass" size="lg">
                Explore the Ecosystem
              </Button>
            </div>

            <Stats facts={facts} />
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
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
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors hover:text-red"
            >
              More about DigitalBurj <span aria-hidden>→</span>
            </Link>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full rounded-xl border border-cloud bg-white p-6 shadow-sm"
                >
                  <p className="text-lg font-bold text-navy">{s.step}</p>
                  <p className="mt-2 text-sm text-slate">{s.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Four divisions */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">Ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Four divisions, one recognition device.
            </h2>
            <p className="mt-5 text-lg text-slate">
              Each division carries the same DigitalBurj mark, distinguished by a text
              descriptor rather than an invented replacement symbol.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d) => (
              <StaggerItem key={d.slug} className="h-full">
                <Tilt className="h-full rounded-2xl" max={6}>
                  <Link
                    to={`/ecosystem/${d.slug}`}
                    className="card-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-cloud bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/15"
                  >
                    {d.image && (
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cloud">
                        <img
                          src={d.image}
                          alt={d.imageAlt ?? ""}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:rotate-1 group-hover:scale-110"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                          {d.tag}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-red">
                        {d.tag}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-bold text-navy transition-colors group-hover:text-red">{d.name}</h3>
                      <p className="mt-2 flex-1 text-sm text-slate">{d.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-red">Learn more</span>
                        <span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-cloud transition-all duration-300 group-hover:bg-red group-hover:text-white">→</span>
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-cloud bg-white p-6 shadow-sm sm:flex-row sm:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red">
                  {jobsService.tag}
                </span>
                <p className="mt-1 text-sm text-slate">{jobsService.summary}</p>
              </div>
              <Button href={`https://${jobsService.domain}`} variant="outline" className="whitespace-nowrap">
                Visit Jobs
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How DigitalBurj works */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">
            How DigitalBurj works
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            One identity, evidence that carries forward.
          </h2>
        </Reveal>
        <Stagger className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-cloud lg:block" aria-hidden />
          {[
            "Discover the company and choose a division",
            "Sign in once with a shared DigitalBurj identity",
            "Learn, build or engage inside the right workspace",
            "Evidence and outcomes carry into your profile",
          ].map((item, i) => (
            <StaggerItem key={item} className="relative pl-12">
              <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white ring-4 ring-white">
                {i + 1}
              </span>
              <p className="text-sm text-slate">{item}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Technology */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
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
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white transition-colors hover:text-red"
              >
                Explore our technology <span aria-hidden>→</span>
              </Link>
            </Reveal>
            <Reveal delay={0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-xl border border-white/10 bg-white/5 p-8"
              >
                <Logo variant="icon" className="h-16 w-16 rounded-lg" />
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li>Shared identity, sessions and organizations</li>
                  <li>One authenticated workspace across every division</li>
                  <li>A controlled API boundary, not an open surface</li>
                  <li>Independent verification, separate from initial approval</li>
                </ul>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio carousel */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Verified work across the ecosystem.
            </h2>
          </div>
          <Link to="/portfolio" className="whitespace-nowrap text-sm font-semibold text-navy hover:text-red">
            View full portfolio →
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Carousel slideClassName="basis-[85%] pr-4 sm:basis-1/2 lg:basis-1/3">
            {portfolio.map((p) => (
              <Tilt key={p.name} className="h-full rounded-2xl" max={5}>
                <div className="card-ring relative h-full overflow-hidden rounded-2xl border border-cloud bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red via-gold to-red bg-[length:200%_auto] motion-safe:animate-gradient" />
                  <div className="flex items-center justify-between">
                    <p className="font-display font-bold text-navy">{p.name}</p>
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-glow to-gold motion-safe:animate-pulse-dot" />
                  </div>
                  <p className="mt-1 text-sm text-slate">{p.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cloud px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate">
                    {p.status}
                  </p>
                </div>
              </Tilt>
            ))}
          </Carousel>
        </Reveal>
      </section>

      {/* Ecosystem proof tickers */}
      <section className="border-y border-cloud bg-white py-14">
        <LogoTicker />
      </section>

      {/* KPI momentum band */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-white">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-navy opacity-70" />
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-red/25 blur-3xl motion-safe:animate-aurora" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl motion-safe:animate-aurora" style={{ animationDelay: "-6s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Momentum</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              One platform, <span className="text-gradient-gold motion-safe:animate-gradient">compounding evidence.</span>
            </h2>
          </Reveal>
          <div className="mt-10">
            <KpiBand />
          </div>
        </div>
      </section>

      {/* Industries marquee */}
      <section className="bg-cloud py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">Industries</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Sectors we work alongside.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Marquee durationSeconds={24}>
            {[...industries, ...industries].map((industry, i) => (
              <span
                key={`${industry}-${i}`}
                className="whitespace-nowrap rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-medium text-navy"
              >
                {industry}
              </span>
            ))}
          </Marquee>
        </Reveal>
      </section>

      {/* People */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-red">People</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Direct, precise and evidence-led.
            </h2>
            <p className="mt-5 text-lg text-slate">
              We show actual work and real people rather than fictional metrics or sweeping
              guarantees. Technical claims stay understandable, and examples are verified before
              they are published.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border border-cloud bg-white p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy">What we do not promise</p>
              <ul className="mt-4 space-y-2 text-sm text-slate">
                <li>Guaranteed employment, visas, or earnings</li>
                <li>Instant capability or unverified performance figures</li>
                <li>Employment or licensing rules presented as universal</li>
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — toolkit: Component Lab faq + WebOS faq */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Faq />
      </section>

      {/* Get started */}
      <section className="relative overflow-hidden bg-navy">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(227,27,35,0.4), transparent 55%)",
          }}
          aria-hidden
        />
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-red/25 blur-3xl motion-safe:animate-aurora" />
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl motion-safe:animate-aurora" style={{ animationDelay: "-5s" }} />
        </div>
        <Reveal className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Choose how you want to <span className="text-gradient motion-safe:animate-gradient">engage.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Learner, founder, business or employer — get started takes you to the right entry
            point.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/get-started" variant="gradient" size="lg" icon={<ArrowIcon />}>
              Get Started
            </Button>
            <Button to="/contact" variant="glass" size="lg">
              Talk to us
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="transition-transform group-hover:translate-x-1"
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
