import { motion } from "motion/react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

// iOS-style buttons on brand tokens: full-radius, semibold, soft shadow,
// spring press (scale 0.97). Red is reserved for the primary action only.
type Variant =
  | "primary"
  | "dark"
  | "secondary"
  | "outline"
  | "outline-light"
  | "ghost"
  | "gradient"
  | "glow"
  | "glass"

type Size = "sm" | "md" | "lg"

type CommonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: ReactNode
}

type ButtonAsLink = CommonProps & {
  to: string
  href?: never
  onClick?: never
  type?: never
}

type ButtonAsAnchor = CommonProps & {
  href: string
  to?: never
  onClick?: never
  type?: never
}

type ButtonAsButton = CommonProps & {
  to?: never
  href?: never
  onClick?: () => void
  type?: "button" | "submit"
}

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

const variantClasses: Record<Variant, string> = {
  primary: "bg-red text-white shadow-[0_8px_20px_-8px_rgba(227,27,35,0.5)] hover:brightness-105 active:brightness-95",
  dark: "bg-navy text-white shadow-[0_8px_20px_-10px_rgba(16,39,60,0.6)] hover:brightness-125 active:brightness-100",
  secondary: "bg-cloud text-navy hover:bg-navy/10 active:bg-navy/15",
  outline: "border border-navy/15 text-navy bg-white hover:border-navy/30 hover:bg-cloud/60",
  "outline-light": "border border-white/25 text-white hover:bg-white/10 active:bg-white/15",
  ghost: "text-navy hover:text-red",
  // Legacy aliases from the maximalist pass — mapped back to brand-safe iOS styles
  gradient: "bg-red text-white shadow-[0_8px_20px_-8px_rgba(227,27,35,0.5)] hover:brightness-105 active:brightness-95",
  glow: "bg-red text-white shadow-[0_8px_20px_-8px_rgba(227,27,35,0.5)] hover:brightness-105 active:brightness-95",
  glass: "glass border border-white/25 text-white hover:bg-white/15",
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-[15px]",
}

function Content({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {icon}
    </span>
  )
}

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-[background-color,border-color,filter,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className = "", icon } = props
  const cls = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  // iOS spring: gentle lift on hover, physical press on tap
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 500, damping: 30 },
  }

  if ("to" in props && props.to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={props.to} className={cls}>
          <Content icon={icon}>{children}</Content>
        </Link>
      </motion.div>
    )
  }

  if ("href" in props && props.href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={props.href} className={cls}>
          <Content icon={icon}>{children}</Content>
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={"type" in props ? props.type ?? "button" : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={cls}
    >
      <Content icon={icon}>{children}</Content>
    </motion.button>
  )
}
