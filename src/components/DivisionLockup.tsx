import Logo from "./Logo"

// Divisional lockup per docs/brand-guidelines.md §6: the same corporate
// wordmark plus a text descriptor (ACADEMY / STUDIO / BUSINESS AI /
// VERIFIED TALENT / JOBS) in a consistent secondary size. Never an
// invented replacement symbol, never a per-division recolor of the B.
const descriptors: Record<string, string> = {
  academy: "ACADEMY",
  studio: "STUDIO",
  "business-ai": "BUSINESS AI",
  "verified-talent": "VERIFIED TALENT",
  jobs: "JOBS",
}

export default function DivisionLockup({
  division,
  className = "",
  align = "start",
}: {
  division: keyof typeof descriptors | string
  className?: string
  align?: "start" | "center"
}) {
  const descriptor = descriptors[division] ?? String(division).toUpperCase()
  const alignCls = align === "center" ? "items-center text-center" : "items-start"
  return (
    <div className={`inline-flex flex-col gap-2 ${alignCls} ${className}`}>
      <Logo className="h-8 w-auto sm:h-9" />
      <span className="flex items-center gap-2">
        <span aria-hidden className="h-px w-6 bg-red" />
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-navy">
          {descriptor}
        </span>
      </span>
      <span className="sr-only">DigitalBurj {descriptor}</span>
    </div>
  )
}
