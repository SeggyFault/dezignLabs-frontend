import { useInView } from '../hooks/useInView'

export default function Examples() {
  const [containerRef, inView] = useInView(0.1)

  const examples = [
    { src: "/images/example-1.jpg", span: "md:col-span-4", alt: "lidl advertisement",   delay: "delay-100" },
    { src: "/images/example-2.jpg", span: "md:col-span-8", alt: "info indoor billboard",  delay: "delay-200" },
    { src: "/images/example-3.jpg", span: "md:col-span-8", alt: "airport departure board", delay: "delay-300" },
    { src: "/images/example-4.jpg", span: "md:col-span-4", alt: "ikea advertisement",     delay: "delay-400" },
    { src: "/images/example-5.jpg", span: "md:col-span-6", alt: "valentine's ad",        delay: "delay-500" },
    { src: "/images/example-6.jpg", span: "md:col-span-6", alt: "aldi coming soon",      delay: "delay-600" },
  ];

  return (
    <section className="bg-brand-primary py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-0 flex flex-col gap-4 md:gap-8">
        <h2 className="text-text-on-dark uppercase text-5xl font-bold tracking-wide">
          Examples
        </h2>

        {/* Attach ref to this grid container */}
        <div ref={containerRef} className="grid grid-cols-12 gap-4">
          {examples.map((img, i) => (
            <div
              key={i}
              className={`
                col-span-12 ${img.span}
                opacity-0
                ${inView ? 'animate-[var(--animate-slide-in)] ' + img.delay : ''}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
