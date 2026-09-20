import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { divisions, jobsService } from "../data/content"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-glow to-gold" />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <motion.div whileHover={{ rotate: -4, scale: 1.05 }} className="inline-block">
              <Logo variant="icon" className="h-10 w-10 rounded-md" />
            </motion.div>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              People. Technology. Opportunity. Learn, build, verify and progress — in one
              coordinated ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Ecosystem
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link to={`/ecosystem/${d.slug}`} className="text-white/80 hover:text-white transition-colors">
                    {d.tag}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`https://${jobsService.domain}`} className="text-white/80 hover:text-white transition-colors">
                  {jobsService.tag}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/company/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/company/mission" className="text-white/80 hover:text-white transition-colors">Mission</Link>
              </li>
              <li>
                <Link to="/company/our-approach" className="text-white/80 hover:text-white transition-colors">Our Approach</Link>
              </li>
              <li>
                <Link to="/company/leadership" className="text-white/80 hover:text-white transition-colors">Leadership</Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-white/80 hover:text-white transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/technology" className="text-white/80 hover:text-white transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} DigitalBurj. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold hover:shadow-[0_0_18px_-2px_rgba(199,164,94,0.8)]"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
