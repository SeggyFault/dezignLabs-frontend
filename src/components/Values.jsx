import Value from "./Value"

export default function Values() {
  return (
    <section className="py-12 md:py-20 bg-brand-accent">
      <div className="container px-4 md:px-0 mx-auto">
        <h2 className="uppercase text-5xl font-bold text-brand-primary mb-8">Our values</h2>
        <div className="grid grid-cols-12 gap-4">
          {/*Value 1*/}
          <Value
            className="bg-[url(/images/values_icon_1.svg)] bg-no-repeat bg-top-right bg-contain"
            title="Excellence & Precision" 
            text="We commit to delivering top-tier quality in every project, ensuring flawless execution with meticulous attention to detail" 
          />
          {/*Value 2*/}
          <Value
            className="bg-[url(/images/values_icon_2.svg)] bg-no-repeat bg-top-right bg-contain"
            title="Speed & Efficiency"
            text="Our agile approach enables us to meet tight deadlines without compromising quality, ensuring our clients stay ahead of the curve"
          />
          {/*Value 3*/}
          <Value
            className="bg-[url(/images/values_icon_3.svg)] bg-no-repeat bg-top-right bg-contain"
            title="Personalized Collaboration"
            text="Every project is unique. We tailor our solutions to align perfectly with each client’s vision, goals, and challenges"
          />
          {/*Value 4*/}
          <Value
            className="bg-[url(/images/values_icon_4.svg)] bg-no-repeat bg-top-right bg-contain"
            title="Flexibility & Adaptability"
            text="No matter how complex or unconventional the project, we navigate challenges with creative problem-solving and a can-do attitude"
          />
        </div>
      </div>
    </section>
  )
}