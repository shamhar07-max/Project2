import { Link } from "react-router-dom"
import PageHero from "../../components/PageHero"
import Reveal from "../../components/motion/Reveal"

export default function Careers() {
  return (
    <div>
      <PageHero
        eyebrow="Company"
        title="Careers at DigitalBurj"
        description="DigitalBurj corporate vacancies across engineering, education, business AI and operations."
      />
      <Reveal className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
        <p className="text-lg text-slate">
          Open corporate roles will be listed here as they are approved. Looking for a role at a
          division instead of at DigitalBurj corporate?{" "}
          <Link to="/ecosystem" className="font-semibold text-navy hover:text-red">
            Explore the ecosystem
          </Link>{" "}
          or visit DigitalBurj Jobs.
        </p>
      </Reveal>
    </div>
  )
}
