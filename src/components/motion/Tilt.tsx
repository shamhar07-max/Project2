import { motion, useReducedMotion } from "motion/react"
import { useRef, type ReactNode } from "react"

// Toolkit source: Component Lab `spotlight` — cursor-tracked glow +
// subtle 3D tilt. Transform/opacity only, disabled under reduced motion.
export default function Tilt({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.setProperty("--tx", `${px * max}deg`)
    ref.current.style.setProperty("--ty", `${-py * max}deg`)
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`)
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`)
  }

  function onLeave() {
    if (!ref.current) return
    ref.current.style.setProperty("--tx", "0deg")
    ref.current.style.setProperty("--ty", "0deg")
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group/tilt relative ${className}`}
      style={{
        transform: "perspective(900px) rotateX(var(--ty, 0deg)) rotateY(var(--tx, 0deg))",
        transformStyle: "preserve-3d",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(227,27,35,0.14), rgba(199,164,94,0.10) 45%, transparent 70%)",
        }}
      />
      {children}
    </motion.div>
  )
}
