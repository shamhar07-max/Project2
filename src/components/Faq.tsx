import Reveal from "./motion/Reveal"

// Toolkit source: Component Lab `faq` + WebOS marketplace `faq` (SEO FAQ Accordion).
// Adapted to Project2 idioms: Tailwind v4 tokens (navy/red/cloud), native
// <details>/<summary> for accessibility, copy derived only from existing
// site content (content.ts, About, Technology) — no invented claims per
// brand-guidelines voice rules.
const faqs = [
  {
    q: "What is DigitalBurj?",
    a: "One company operating a connected platform: Academy, Studio, Business AI and Verified Talent, plus Jobs — sharing one identity, authorization model and evidence standard.",
  },
  {
    q: "How do the four divisions differ?",
    a: "Academy is practical education with assessed competence. Studio is validation-first product delivery. Business AI is bounded, measured automation. Verified Talent keeps self-reported experience separate from independently reviewed capability.",
  },
  {
    q: "Do I need an Academy credential to use Jobs?",
    a: "No. Jobs is an open, connected opportunity marketplace — an Academy credential is not required for every applicant.",
  },
  {
    q: "How is verification different from approval?",
    a: "Completion, assessed competence and independently verified evidence are kept distinct. Verification is separate from initial approval, so employers see what was actually verified.",
  },
  {
    q: "Is this one site or many?",
    a: "This is the corporate HQ site only. Academy, Studio, Business AI, Verified Talent, Jobs and the other platform domains are separate builds linked from here.",
  },
  {
    q: "What does DigitalBurj not promise?",
    a: "Guaranteed employment, visas, earnings, instant capability, or unverified performance figures. Claims are shown as evidence, not assumed.",
  },
]

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl">
      <Reveal className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-red">FAQ</p>
        <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
          Answers, before you ask.
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-cloud rounded-xl border border-cloud bg-white shadow-sm">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 py-5" name="db-faq">
            <summary className="cursor-pointer list-none text-[15px] font-semibold text-navy transition-colors hover:text-red [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
