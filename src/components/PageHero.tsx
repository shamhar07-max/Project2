import { motion } from "motion/react"

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-cloud bg-cloud">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(16,39,60,0.06), transparent 45%), radial-gradient(circle at 80% 0%, rgba(227,27,35,0.08), transparent 40%)",
        }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto max-w-5xl px-6 py-20 text-center lg:px-8"
      >
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-red">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate">{description}</p>
        )}
      </motion.div>
    </section>
  )
}
