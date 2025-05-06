import CTA from "../components/CTA"
import { useNavigate } from 'react-router-dom'

export default function EpaperPage() {

  const navigate = useNavigate()

  return (
    <div>
      {/*HERO*/}
      <section className="py-12 md:py-20 bg-surface-default">
        <div className=""></div>
        <img className="w-full h-auto" src="/images/epaper-hero.webp" alt="" />
        <div className="container px-4 md:px-0 mx-auto">
          <h2 className="text-brand-primary uppercase text-5xl font-bold tracking-wide pt-20 pb-8">Optimizing Content for Next-Gen E-Paper Displays</h2>
          <div className="flex gap-4 flex-col md:flex-row">
            <p className="font-bold text-base">At DezignLabs, we work at the forefront of digital innovation—partnering with Samsung to revolutionize e-paper display technology</p>
            <p className="text-base text-gray-700">E-paper is transforming the way businesses display information, offering a high-contrast, energy-efficient alternative to traditional screens. However, designing for e-paper requires a specialized approach—and that’s where we come in</p>
          </div>
        </div>
      </section>

      {/*OUR EXPERTISE*/}
      <section className="bg-brand-primary py-12 md:py-20 relative">
        <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4 md:gap-8">
           <h2 className="text-text-on-dark uppercase text-5xl font-bold tracking-wide">Our Expertise</h2>
           <p className="text-text-on-dark text-base font-light md:text-lg">We specialize in <span className="font-bold">creating and adapting content</span> specifically for e-paper displays, ensuring <span className="font-bold">optimal readability, sharp contrast, and seamless performance</span> within the technical limitations of the medium. Whether you need <span className="font-bold">new content or adjustments to existing assets,</span> we handle every aspect — <span className="font-bold">from pixel-perfect graphics to technical compliance</span></p>
        </div>
        <div className="absolute left-0 bottom-0 h-4 w-2/3 bg-brand-accent"></div>
      </section>

      {/*EXAMPLES*/}
      <section className="bg-brand-primary py-12 md:py-20">
        <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4 md:gap-8">
          <h2 className="text-text-on-dark uppercase text-5xl font-bold tracking-wide">Examples</h2>
          {/*Grid*/}
          <div className="grid grid-cols-12 gap-4">
            {/*Row 1*/}
            <div className="col-span-12 md:col-span-4">
              <img className="w-full h-80 object-cover" src="/images/example-1.jpg" alt="" />
            </div>
            <div className="col-span-12 md:col-span-8">
              <img className="w-full h-80 object-cover" src="/images/example-2.jpg" alt="" />
            </div>
            {/*Row 2*/}
            <div className="col-span-12 md:col-span-8">
              <img className="w-full h-100 object-cover" src="/images/example-3.jpg" alt="" />
            </div>
            <div className="col-span-12 md:col-span-4">
              <img className="w-full h-100 object-cover" src="/images/example-4.jpg" alt="" />
            </div>
            {/*Row 3*/}
            <div className="col-span-12 md:col-span-6">
              <img className="w-full h-80 object-cover" src="/images/example-5.jpg" alt="" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <img className="w-full h-80 object-cover" src="/images/example-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <CTA 
        title="Ready to elevate your e-paper experience?"
        buttonText="Let's Talk"
        onClick={() => navigate('/contacts')}
      />
    </div>
  )
}