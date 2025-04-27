import Button from "./Button"

export default function Hero() {
  return (
    <section className="relative h-screen mb-20">
      <div className="absolute inset-x-0 top-20 w-full h-screen overflow-hidden">
	      <img className="object-cover w-full h-full" src="/images/hero.png" alt="hero image" />
	      <div className="absolute inset-0 bg-text-default opacity-50"></div>
      </div>
      <div className="relative container mx-auto flex flex-col gap-4 h-screen md:gap-8 justify-end">
        <h1 className="uppercase text-text-on-dark text-5xl md:text-6xl">Bringing bold visions & powerful stories to life</h1>
        <p className="text-text-on-dark text-xl font-light">We create immersive experiences that keep your game in players' pockets — and on their minds</p>
        <Button className="mx-auto ml-0">Learn More</Button>
      </div>
    </section>
  )
}