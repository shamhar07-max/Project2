import { Link } from "react-router-dom"
import { divisions, jobsService } from "../data/content"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-cloud bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo variant="icon" className="h-10 w-10 rounded-md" />
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
                  <Link to={`/ecosystem/${d.slug}`} className="text-white/80 hover:text-white">
                    {d.tag}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`https://${jobsService.domain}`} className="text-white/80 hover:text-white">
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
                <Link to="/company/about" className="text-white/80 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/company/mission" className="text-white/80 hover:text-white">Mission</Link>
              </li>
              <li>
                <Link to="/company/leadership" className="text-white/80 hover:text-white">Leadership</Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-white/80 hover:text-white">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white">Portfolio</Link>
              </li>
              <li>
                <Link to="/technology" className="text-white/80 hover:text-white">Technology</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} DigitalBurj. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
