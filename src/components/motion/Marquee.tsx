import type { ReactNode } from "react"

type MarqueeProps = {
  children: ReactNode
  className?: string
  durationSeconds?: number
  reverse?: boolean
}

export default function Marquee({ children, className = "", durationSeconds = 28, reverse = false }: MarqueeProps) {
  return (
    <div className={`group relative flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <div
        className="flex shrink-0 items-center gap-4 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${durationSeconds}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        aria-hidden={false}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 items-center gap-4 motion-safe:animate-marquee motion-safe:group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${durationSeconds}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
