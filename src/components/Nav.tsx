import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../data/content"
import Logo from "./Logo"

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-cloud bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="h-7 w-auto sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-navy" : "text-slate hover:text-navy"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="text-sm font-semibold text-navy hover:text-red transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/get-started"
            className="rounded-md bg-red px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-cloud bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? "text-navy" : "text-slate"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-cloud pt-4">
              <Link to="/contact" onClick={() => setOpen(false)} className="text-base font-semibold text-navy">
                Sign In
              </Link>
              <Link
                to="/get-started"
                onClick={() => setOpen(false)}
                className="rounded-md bg-red px-4 py-2 text-center text-base font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
