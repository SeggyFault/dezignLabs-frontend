import { motion } from "framer-motion"
import Value from "./Value"
import { useInView } from "../hooks/useInView"

export default function Values() {
  const [containerRef, inView] = useInView(0.1)

  const values = [
    {
      className: "bg-[url(/images/values_icon_1.svg)] bg-no-repeat bg-top-right bg-contain",
      title: "Excellence & Precision",
      text: "We commit to delivering top-tier quality in every project, ensuring flawless execution with meticulous attention to detail",
    },
    {
      className: "bg-[url(/images/values_icon_2.svg)] bg-no-repeat bg-top-right bg-contain",
      title: "Speed & Efficiency",
      text: "Our agile approach enables us to meet tight deadlines without compromising quality, ensuring our clients stay ahead of the curve",
    },
    {
      className: "bg-[url(/images/values_icon_3.svg)] bg-no-repeat bg-top-right bg-contain",
      title: "Personalized Collaboration",
      text: "Every project is unique. We tailor our solutions to align perfectly with each client’s vision, goals, and challenges",
    },
    {
      className: "bg-[url(/images/values_icon_4.svg)] bg-no-repeat bg-top-right bg-contain",
      title: "Flexibility & Adaptability",
      text: "No matter how complex or unconventional the project, we navigate challenges with creative problem-solving and a can-do attitude",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-brand-accent">
      <div className="container px-4 md:px-0 mx-auto">
        <h2 className="uppercase text-5xl font-bold text-brand-primary mb-8">Our values</h2>
        <div ref={containerRef} className="grid grid-cols-12 gap-4">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="col-span-12 md:col-span-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <Value {...val} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
