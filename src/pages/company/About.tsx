import PageHero from "../../components/PageHero"
import Reveal from "../../components/motion/Reveal"

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Company"
        title="About DigitalBurj"
        description="DigitalBurj connects practical education, technology delivery, business intelligence and evidence-backed professional opportunity in one coordinated ecosystem."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Reveal className="space-y-6 text-lg text-slate">
          <p>
            DigitalBurj is one company operating a connected platform, with distinct divisional
            experiences — Academy, Studio, Business AI and Verified Talent — sharing accounts,
            authorization, operational services and evidence records.
          </p>
          <p>
            The core narrative behind every division is the same: Learn, Build, Verify, Progress.
            Rather than treating education, delivery, automation and hiring as separate
            businesses, DigitalBurj keeps them on one identity and one evidence trail, so
            capability built in one place is recognized everywhere else in the ecosystem.
          </p>
          <p>
            The public positioning is deliberately plain: People. Technology. Opportunity. We
            avoid promising guaranteed employment, visas, earnings, instant capability or
            unverified performance figures — claims are shown as evidence, not assumed.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
