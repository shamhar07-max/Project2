import PageHero from "../components/PageHero"

export default function Privacy() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="space-y-6 text-slate">
          <p>
            This is a placeholder privacy notice. DigitalBurj's full privacy policy, covering
            data collected across the corporate site, divisions and shared platform, will be
            published here before any personal data is processed in production.
          </p>
          <p>
            Until the complete policy is published, treat this page as informational only, not a
            binding statement of current data practices.
          </p>
        </div>
      </section>
    </div>
  )
}
