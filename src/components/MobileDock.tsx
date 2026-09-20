import { Link } from "react-router-dom"

// Toolkit source: WebOS `cta-whatsapp` (Mobile Conversion Dock).
// Adapted: no invented phone number — links only to real routes
// (/ecosystem, /get-started, /contact). Mobile-only, respects safe-area.
export default function MobileDock() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-cloud bg-white/95 p-2 shadow-xl backdrop-blur-md">
        <Link
          to="/ecosystem"
          className="flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-cloud"
        >
          Explore
        </Link>
        <Link
          to="/get-started"
          className="flex-1 rounded-xl bg-red px-3 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get Started
        </Link>
        <Link
          to="/contact"
          className="flex-1 rounded-xl px-3 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-cloud"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
