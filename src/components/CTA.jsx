import Button from "./Button"

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-brand-accent to-brand-primary py-12 md:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-4 md:gap-8">
        <h2 className="uppercase text-3xl md:text-5xl font-bold text-text-default text-center">Interested in working with us?</h2>
        <Button variant="cta">Let's connect</Button>
      </div>
    </section>
  )
}