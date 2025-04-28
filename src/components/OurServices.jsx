export default function OurServices() {
  return (
    <section className="bg-brand-primary py-12 md:py-20">
      <div className="container mx-auto flex flex-col gap-4 md:gap-8">
        <h2 className="text-text-on-dark uppercase text-5xl font-bold">Our services</h2>
        {/*Grid*/}
        <div className="grid grid-cols-12 gap-4">
          {/*Row 1*/}
          <div className="col-span-12 md:col-span-8 bg-surface-muted">1</div>
          <div className="col-span-12 md:col-span-4 bg-surface-muted">2</div>
          {/*Row 2*/}
          <div className="col-span-12 md:col-span-4 bg-surface-muted">3</div>
          <div className="col-span-12 md:col-span-8 bg-surface-muted">4</div>
          {/*Row 3*/}
          <div className="col-span-12 md:col-span-12 bg-surface-muted">5</div>
        </div>
      </div>
    </section>
  )
}