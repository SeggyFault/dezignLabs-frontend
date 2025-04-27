export default function OurClients() {
  return (
    <section className="bg-surface-muted py-12 md:py-20">
      <div className="container mx-auto flex flex-col gap-4 md:gap-8">
        <h2 className="uppercase text-brand-primary text-5xl font-bold">Our clients</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          <img src="/images/scopely-logo.svg" alt="Scopely Logo" className="max-h-14"/>
          <img src="/images/a5-logo.svg" alt="A5 Logo" className="max-h-14" />
          <img src="/images/zyngapoker-logo.svg" alt="Zynga poker Logo" className="max-h-14" />
          <img src="/images/playtika-logo.svg" alt="Playtika Logo" className="max-h-14" />
          <img src="/images/microgaming-logo.svg" alt="Microgaming Logo" className="max-h-14" />
          <img src="/images/boss-logo.svg" alt="Boss Logo" className="max-h-14" />
        </div>
      </div>
    </section>
  )
}