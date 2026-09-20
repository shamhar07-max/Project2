import PageHero from "../../components/PageHero"

export default function Leadership() {
  return (
    <div>
      <PageHero
        eyebrow="Company"
        title="Leadership"
        description="Leadership and operating responsibilities across DigitalBurj."
      />
      <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
        <p className="text-lg text-slate">
          Leadership profiles are being prepared for publication. In the meantime, reach the
          leadership team directly through{" "}
          <a href="/contact" className="font-semibold text-navy hover:text-red">
            corporate enquiries
          </a>
          .
        </p>
      </section>
    </div>
  )
}
