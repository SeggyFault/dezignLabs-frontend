import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi2'

export default function AboutUs() {
  return (
    <section className="py-12 md:py-20 bg-surface-muted">
      <div className="container px-4 md:px-0 mx-auto">
        <h2 className="uppercase text-5xl font-bold text-brand-primary mb-8">About us</h2>
        {/*Grid*/}
        <div className="grid grid-cols-12 gap-6">
          {/*Row 1*/}
          <div className="col-span-12 space-y-4 md:col-span-4 bg-white shadow-md rounded-2xl p-6">
            <HiOutlineUserGroup className="text-brand-primary text-4xl mb-4" />
            <h3 className="uppercase text-brand-primary text-xl tracking-wide font-semibold mb-3">Who we are</h3>
            <p className="font-bold text-base mb-2">We’re an independent design communications agency specializing in building trust and strong connections between players and products</p>
            <p className="text-base text-gray-700">Agile, client-focused, and driven, we move fast and deliver impact beyond expectations</p>
          </div>
          {/*Row 2*/}
          <div className="col-span-12 space-y-4 md:col-span-4 bg-white shadow-md rounded-2xl p-6">
            <HiOutlineLightBulb className="text-brand-primary text-4xl mb-4" />
            <h3 className="uppercase text-brand-primary text-xl tracking-wide font-semibold mb-3">What we do</h3>
            <p className="font-bold text-base mb-2">We help your game stand out in a crowded market</p>
            <p className="text-base text-gray-700">From game concept and design to marketing, influencers, and seamless integrations—we create, connect, and elevate to ensure your game’s success</p>
          </div>
          {/*Row 3*/}
          <div className="col-span-12 space-y-4 md:col-span-4 bg-white shadow-md rounded-2xl p-6">
            <HiOutlineGlobeAlt className="text-brand-primary text-4xl mb-4" />
            <h3 className="uppercase text-brand-primary text-xl tracking-wide font-semibold mb-3">Our mission</h3>
            <p className="font-bold text-base mb-2">To empower businesses worldwide</p>
            <p className="text-base text-gray-700">to become the world's leading design agency, connecting global creative excellence with local business needs, setting new standards in design innovation and delivery. Our elite network of designers, delivering exceptional creative solutions that transform ambitious ideas into reality</p>
          </div>
        </div>
      </div>
    </section>
  )
}