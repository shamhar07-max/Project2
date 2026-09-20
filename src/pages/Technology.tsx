import { motion } from "motion/react"
import PageHero from "../components/PageHero"
import Stagger, { StaggerItem } from "../components/motion/Stagger"

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

export default function Technology() {
  return (
    <div>
      <PageHero
        eyebrow="Technology"
        title="Built for authorization, evidence and reliability"
        description="The same engineering standards run underneath Academy, Studio, Business AI, Verified Talent and Jobs."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <Stagger className="grid gap-8 sm:grid-cols-2">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full rounded-xl border border-cloud p-6">
                <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-slate">{p.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
