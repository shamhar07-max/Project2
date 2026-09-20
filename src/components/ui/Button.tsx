import { motion } from "motion/react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type Variant = "primary" | "dark" | "outline" | "outline-light" | "ghost"

type CommonProps = {
  children: ReactNode
  variant?: Variant
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
  primary: "bg-red text-white shadow-sm shadow-red/20",
  dark: "bg-navy text-white shadow-sm shadow-navy/20",
  outline: "border border-navy/20 text-navy bg-white hover:bg-cloud",
  "outline-light": "border border-white/30 text-white hover:bg-white/10",
  ghost: "text-navy hover:text-red",
}

const shineVariants: Variant[] = ["primary", "dark"]

function Content({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {icon}
    </span>
  )
}

function Shine({ variant }: { variant: Variant }) {
  if (!shineVariants.includes(variant)) return null
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
    />
  )
}

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", icon } = props
  const cls = `${base} ${variantClasses[variant]} ${className}`

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.18 },
  }

  if ("to" in props && props.to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={props.to} className={cls}>
          <Shine variant={variant} />
          <Content icon={icon}>{children}</Content>
        </Link>
      </motion.div>
    )
  }

  if ("href" in props && props.href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={props.href} className={cls}>
          <Shine variant={variant} />
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
      <Shine variant={variant} />
      <Content icon={icon}>{children}</Content>
    </motion.button>
  )
}
