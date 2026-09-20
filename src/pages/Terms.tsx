import PageHero from "../components/PageHero"

export default function Terms() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="space-y-6 text-slate">
          <p>
            This is a placeholder terms notice. DigitalBurj's full terms of service, covering use
            of the corporate site, divisional services and the shared platform, will be published
            here before commercial use.
          </p>
          <p>
            Nothing on this site should be read as a guarantee of employment, visas, earnings,
            instant capability or unverified performance figures.
          </p>
        </div>
      </section>
    </div>
  )
}
