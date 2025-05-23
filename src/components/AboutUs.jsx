import { HiOutlineUserGroup, HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { useInView } from '../hooks/useInView'

export default function AboutUs() {
  const [containerRef, inView] = useInView(0.1)

  const cards = [
    {
      icon: <HiOutlineUserGroup className="text-brand-primary text-4xl mb-4" />,
      title: "Who we are",
      strong: "We’re an independent design communications agency specializing in building trust and strong connections between players and products",
      description: "Agile, client-focused, and driven, we move fast and deliver impact beyond expectations",
      delay: "delay-100"
    },
    {
      icon: <HiOutlineLightBulb className="text-brand-primary text-4xl mb-4" />,
      title: "What we do",
      strong: "We help your game stand out in a crowded market",
      description: "From game concept and design to marketing, influencers, and seamless integrations—we create, connect, and elevate to ensure your game’s success",
      delay: "delay-200"
    },
    {
      icon: <HiOutlineGlobeAlt className="text-brand-primary text-4xl mb-4" />,
      title: "Our mission",
      strong: "To empower businesses worldwide",
      description: "to become the world's leading design agency, connecting global creative excellence with local business needs, setting new standards in design innovation and delivery. Our elite network of designers, delivering exceptional creative solutions that transform ambitious ideas into reality",
      delay: "delay-300"
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-surface-muted">
      <div className="container px-4 md:px-0 mx-auto">
        <h2 className="uppercase text-5xl font-bold text-brand-primary mb-8">About us</h2>
        <div ref={containerRef} className="grid grid-cols-12 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`col-span-12 md:col-span-4 opacity-0 ${
                inView ? `animate-[var(--animate-slide-in)] ${card.delay}` : ''
              } bg-white shadow-md rounded-2xl p-6 space-y-4`}
            >
              {card.icon}
              <h3 className="uppercase text-brand-primary text-xl tracking-wide font-semibold mb-3">{card.title}</h3>
              <p className="font-bold text-base mb-2">{card.strong}</p>
              <p className="text-base text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
