type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-cloud bg-cloud">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-red">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate">{description}</p>
        )}
      </div>
    </section>
  )
}
