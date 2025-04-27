import Hero from "../components/Hero"
import OurServices from "../components/OurServices"
import OurClients from "../components/OurClients"
import CTA from "../components/CTA"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <OurServices />
      <OurClients />
      <CTA />
      {/*<div id="box" className="bg-red-500 w-12 h-12"></div>*/}
    </div>
  )
}