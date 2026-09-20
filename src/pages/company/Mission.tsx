import PageHero from "../../components/PageHero"
import Reveal from "../../components/motion/Reveal"

export default function Mission() {
  return (
    <div>
      <PageHero
        eyebrow="Company"
        title="Mission and vision"
        description="A higher tomorrow, built on evidence rather than promises."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Reveal className="space-y-6 text-lg text-slate">
          <p>
            Our mission is to make practical capability visible and trustworthy — for learners
            building new skills, for businesses commissioning technology, and for employers
            trying to hire with confidence.
          </p>
          <p>
            Our vision is one ecosystem where learning, delivery, automation and verified talent
            share the same identity and the same evidence standard, so progress in any part of
            DigitalBurj means something everywhere else.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
