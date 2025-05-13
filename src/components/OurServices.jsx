import { useNavigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import Card from "./Card"

export default function OurServices({ id }) {
  const navigate = useNavigate()
  const [containerRef, inView] = useInView(0.1)

  return (
    <section id={id} className="bg-brand-primary py-12 md:py-20">
      <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4 md:gap-8">
        <h2 className="text-text-on-dark uppercase text-5xl font-bold">Our services</h2>

        {/*Grid*/}
        <div ref={containerRef} className="grid grid-cols-12 gap-4">
          {[
            { title: "Marvel", description: "Promo video", video: "https://www.youtube.com/watch?v=CfEcO-ajjqE", span: "md:col-span-6", delay: "delay-100" },
            { title: "Scrabble", description: "Promo video", video: "https://www.youtube.com/watch?v=WMOTWB-EPGs", span: "md:col-span-6", delay: "delay-200" },
            { title: "UX/UI Design", description: "Product design", image: "/images/card_3.webp", span: "md:col-span-8", delay: "delay-300" },
            { title: "Static", description: "Promo design", image: "/images/card_4.webp", span: "md:col-span-4", delay: "delay-400" },
            { title: "Game Concepts", description: "Product design", image: "/images/card_5.webp", span: "md:col-span-4", delay: "delay-500" },
            { title: "Work with influencers", description: "Communities, Promo design (Mr.Beast, etc)", image: "/images/card_6.webp", span: "md:col-span-8", delay: "delay-600" },
            { title: "E-paper", description: "Development, Product design", image: "/images/card_5.webp", buttonText: "Learn More", onClick: () => navigate('/epaper'), span: "col-span-12", delay: "delay-700" },
          ].map((card, i) => (
            <div
              key={i}
              className={`col-span-12 ${card.span} opacity-0 ${inView ? `animate-[var(--animate-slide-in)] ${card.delay}` : ''}`}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
