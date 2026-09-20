import PageHero from "../../components/PageHero"

const principles = [
  {
    title: "Evidence before claims",
    body: "Completion, assessed competence, independently verified evidence and real professional experience are always kept distinct.",
  },
  {
    title: "Validate before building",
    body: "Studio and Business AI engagements move through discovery and validation before a build, reshape or stop decision is made.",
  },
  {
    title: "Separation of duties",
    body: "Independent verifiers are distinct from initial approvers on relevant submissions across the platform.",
  },
  {
    title: "Server-enforced authorization",
    body: "A visible frontend menu is never treated as sufficient authority — permissions are enforced server-side.",
  },
]

export default function OurApproach() {
  return (
    <div>
      <PageHero
        eyebrow="Company"
        title="Our approach"
        description="The operating philosophy and process behind every DigitalBurj division."
      />
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-cloud p-6">
              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-slate">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
