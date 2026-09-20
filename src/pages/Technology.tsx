import { motion } from "motion/react"
import PageHero from "../components/PageHero"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
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
  "Tailwind",
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
        <Marquee durationSeconds={30}>
          {stack.map((s) => (
            <span
              key={s}
              className="whitespace-nowrap rounded-full bg-cloud px-5 py-2 text-sm font-semibold text-navy"
            >
              {s}
            </span>
          ))}
        </Marquee>
      </div>
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-3xl border border-navy/5 bg-white p-7 shadow-[0_12px_32px_-16px_rgba(16,39,60,0.2)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-16px_rgba(16,39,60,0.28)]"
              >
                <span className="text-4xl font-extrabold tracking-tight text-cloud">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-3xl bg-navy p-8 text-white shadow-xl">
            <p className="text-xl font-bold">
              Authorization first. Evidence always. Reliability by default.
            </p>
            <p className="mt-2 max-w-2xl text-sm text-white/75">
              Every division inherits the same platform guarantees — sessions, permissions,
              audit trails and recovery are built in, not bolted on.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
