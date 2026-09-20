import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../data/content"
import Button from "./ui/Button"
import Logo from "./Logo"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12)
  })

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <motion.div
        animate={{
          boxShadow: scrolled ? "0 10px 30px -12px rgba(16,39,60,0.25)" : "0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25 }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-md transition-colors duration-300 lg:px-6 ${
          scrolled ? "border-cloud bg-white/90" : "border-white/0 bg-white/70"
        }`}
      >
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? "text-navy" : "text-slate hover:text-navy"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative py-1">
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-red"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="text-sm font-semibold text-navy transition-colors hover:text-red">
            Sign In
          </Link>
          <Button to="/get-started" variant="primary" size="sm" className="px-5">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-cloud bg-white shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-base font-medium ${
                      isActive ? "bg-cloud text-navy" : "text-slate hover:bg-cloud hover:text-navy"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-cloud pt-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="px-3 text-base font-semibold text-navy"
                >
                  Sign In
                </Link>
                <Button to="/get-started" variant="primary" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
