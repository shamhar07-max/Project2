import DivisionLockup from "../components/DivisionLockup"
import Reveal from "../components/motion/Reveal"
import Stagger, { StaggerItem } from "../components/motion/Stagger"
import Button from "../components/ui/Button"
import {
  academyAudiences,
  academyBundles,
  academyLinks,
  academyRoles,
  academyTracks,
  capabilityLevels,
  liveCourses,
  missionLoop,
  submissionLifecycle,
} from "../data/academy"

// Academy-only detail for /ecosystem/academy. Every number below is
// verified against Project-1 (backend/src/data.js + Academy README):
// 66 units, 15 bundles, 12 mission stages, 9-status lifecycle.
export default function AcademyDetail() {
  return (
    <div className="border-t border-cloud bg-white">
      {/* App entry — the bidirectional link between HQ and Academy */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-8 rounded-3xl border border-navy/5 bg-cloud p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <DivisionLockup division="academy" />
            <p className="mt-5 text-lg text-slate">
              The learning platform is live as its own build at{" "}
              <span className="font-semibold text-navy">academy.digitalburj.com</span> — same
              company, same identity standard, same evidence trail that Verified Talent reads.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={academyLinks.access} variant="primary">
              Open Academy app
            </Button>
            <Button href={academyLinks.catalogue} variant="dark">
              Catalogue
            </Button>
            <Button href={academyLinks.bundles} variant="outline">
              Bundles
            </Button>
            <Button href={academyLinks.diagnostic} variant="outline">
              Diagnostic
            </Button>
            <Button href={academyLinks.evidence} variant="outline">
              Evidence
            </Button>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">Curriculum</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Four tracks, 66 course units.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
          {academyTracks.map((t) => (
            <StaggerItem key={t.code}>
              <div className="h-full rounded-3xl border border-navy/5 bg-white p-7 shadow-[0_12px_32px_-16px_rgba(16,39,60,0.2)]">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-navy">{t.name}</h3>
                  <span className="whitespace-nowrap rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
                    {t.units} units
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate">{t.prefix}</p>
                <p className="mt-3 text-sm font-medium text-ink">{t.entry}</p>
                <p className="mt-2 text-sm text-slate">{t.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.08} className="mt-8">
          <div className="rounded-3xl border border-navy/5 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">Live today</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {liveCourses.map((c) => (
                <div key={c.code} className="rounded-2xl bg-cloud p-4">
                  <p className="text-sm font-bold text-navy">{c.code}</p>
                  <p className="mt-1 text-sm text-ink">{c.title}</p>
                  <p className="mt-1 text-xs text-slate">{c.hours} hours</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate">
              Only Active courses are enrollable. Planning, Proposed and Restricted entries stay
              catalogue-only until promoted — planned offerings are never advertised as available.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission loop */}
      <section className="border-y border-cloud bg-cloud/60">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red">How learning works</p>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Every course runs a 12-stage mission loop.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {missionLoop.map((m, i) => (
              <StaggerItem key={m.stage}>
                <div className="h-full rounded-2xl border border-navy/5 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-red">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-bold text-navy">{m.stage}</p>
                  <p className="mt-1 text-[13px] text-slate">{m.help}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-red">Assessment</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            A submission lifecycle with separation of duties.
          </h2>
          <p className="mt-4 text-lg text-slate">
            Role is server-controlled — learner, reviewer, verifier, admin — and staff can only
            ever act on other learners' work, never their own.
          </p>
        </Reveal>
        <Stagger className="relative mt-10 grid gap-3 sm:grid-cols-3">
          {submissionLifecycle.map((s, i) => (
            <StaggerItem key={s.status} className="relative pl-10">
              <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="font-bold text-navy">{s.status}</p>
              <p className="mt-1 text-sm text-slate">{s.meaning}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.08} className="mt-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {academyRoles.map((r) => (
              <div key={r.role} className="rounded-2xl bg-cloud p-5">
                <p className="font-bold text-navy">{r.role}</p>
                <p className="mt-1 text-sm text-slate">{r.scope}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Bundles + audiences */}
      <section className="border-t border-cloud bg-cloud/60">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-red">Bundles</p>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                15 career bundles, credits respected.
              </h2>
              <p className="mt-3 text-slate">
                Bundles credit any course already owned — learners never pay twice for the same unit.
              </p>
            </div>
            <Button href={academyLinks.bundles} variant="dark" className="whitespace-nowrap">
              Open bundles →
            </Button>
          </Reveal>
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {academyBundles.map((b) => (
              <StaggerItem key={b.id}>
                <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-navy/5 bg-white p-5">
                  <div>
                    <p className="font-bold text-navy">{b.name}</p>
                    <p className="mt-0.5 text-xs text-slate">{b.hours} hours</p>
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-navy px-3 py-1 text-sm font-bold text-white">
                    ${b.price}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.08} className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate">Who it serves</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {academyAudiences.map((a) => (
                <span key={a} className="rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy">
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate">
              Capability levels run L1 Guided basics → L5 Repeated verified delivery:{" "}
              {capabilityLevels.map((l) => `${l.code} ${l.label}`).join(" · ")}.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
