import { useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"

// Toolkit source: WebOS `stats` (Animated Metrics Band) + Component Lab
// `counter`. Adapted: navy/red tokens, IntersectionObserver-gated count-up
// with reduced-motion fallback (renders final value immediately).
export type Stat = { value: number; label: string }

function Counter({ value }: { value: number }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduce) {
      if (inView || reduce) setDisplay(value)
      return
    }
    const dur = 900
    const start = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      setDisplay(Math.round(value * p))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value])

  return <span ref={ref}>{display}</span>
}

export default function Stats({ facts }: { facts: Stat[] }) {
  return (
    <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label}>
          <dt className="sr-only">{f.label}</dt>
          <dd className="text-2xl font-extrabold text-white">
            <Counter value={f.value} />
          </dd>
          <dd className="mt-1 text-xs text-white/60">{f.label}</dd>
        </div>
      ))}
    </dl>
  )
}
