import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
import Tilt from "../components/motion/Tilt"
import Marquee from "../components/motion/Marquee"

const pillars = [
  {
    title: "Shared identity & authorization",
    body: "One account across divisions, with sessions, organizations and permissions enforced server-side — never assumed from a visible menu.",
  },
  {
    title: "Engineering, AI & platform",
    body: "Web, mobile, enterprise and API engineering; AI workflows use approved models with privacy and cost controls, evaluation and human review where appropriate.",
  },
  {
    title: "Security & reliability",
    body: "Tenant isolation, idempotency for risky mutations, audited evidence issuance, secure file handling and tested recovery underpin every service.",
  },
  {
    title: "A controlled API boundary",
    body: "Shared and domain-specific capabilities are exposed through one API boundary, not an open surface — every route is authorized and observed.",
  },
]

const stack = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind v4",
  "Motion",
  "Embla",
  "React Router 7",
  "Idempotent APIs",
  "Tenant isolation",
  "Audited evidence",
]

export default function Technology() {
  return (
    <div>
      <PageHero
        eyebrow="Technology"
        title="Built for authorization, evidence and reliability"
        description="The same engineering standards run underneath Academy, Studio, Business AI, Verified Talent and Jobs."
      />
      <div className="border-b border-cloud bg-white py-8">
        <Marquee durationSeconds={26}>
          {stack.map((s) => (
            <span
              key={s}
              className="whitespace-nowrap rounded-full border border-navy/15 bg-cloud px-5 py-2 text-sm font-semibold text-navy transition-colors hover:border-red hover:text-red"
            >
              {s}
            </span>
          ))}
        </Marquee>
      </div>
      <section className="relative mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-light opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]" />
        <Stagger className="relative grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <Tilt className="h-full rounded-2xl" max={5}>
                <div className="card-ring group h-full rounded-2xl border border-cloud bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10">
                  <span className="text-gradient font-display text-4xl font-bold motion-safe:animate-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy transition-colors group-hover:text-red">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1} className="relative mt-10">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-navy via-navy-deep to-navy p-8 text-white shadow-xl">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red/30 blur-3xl motion-safe:animate-aurora" />
              <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-gold/25 blur-3xl motion-safe:animate-aurora" style={{ animationDelay: "-6s" }} />
            </div>
            <p className="relative font-display text-xl font-bold">
              Authorization first. Evidence always.{" "}
              <span className="text-gradient-gold motion-safe:animate-gradient">Reliability by default.</span>
            </p>
            <p className="relative mt-2 max-w-2xl text-sm text-white/75">
              Every division inherits the same platform guarantees — sessions, permissions,
              audit trails and recovery are built in, not bolted on.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
