import CTA from "../components/CTA"
import { useNavigate } from 'react-router-dom'
import ListItem from "../components/ListItem"

export default function EpaperPage() {

  const navigate = useNavigate()

  return (
    <div>
      {/*HERO*/}
      <section className="py-12 md:py-20 bg-surface-default h-screen">
        <img className="w-full h-auto" src="/images/epaper-hero.webp" alt="epaper design hero image" />
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

      {/*WHAT WE DO*/}
      <section className="pt-12 md:pt-20 bg-surface-default">
        <div className="container px-4 md:px-0 mx-auto flex flex-col justify-center items-center md:items-start gap-8 md:gap-16 md:flex-row">
          <img className="w-full max-w-[300px] h-auto object-contain" src="/images/what-we-do-img.webp" alt="citylight image" />
          <div className="mb-12">
            <h2 className="text-brand-primary uppercase text-5xl font-bold tracking-wide pb-8">What we do</h2>
            <ul>
              <ListItem
                className="text-brand-primary"
                title="Custom Content Creation"
                text="Designing engaging visuals tailored for e-paper"
              />
              <ListItem
                className="text-brand-primary"
                title="Content Porting & Adaptation"
                text="Optimizing existing content for perfect e-paper display"
              />
              <ListItem
                className="text-brand-primary"
                title="Wayfinding & Signage"
                text="Airports, train stations, shopping centers"
              />
              <ListItem
                className="text-brand-primary"
                title="Digital Pricing & Menus"
                text="Restaurants, QSRs, retail stores, and supermarkets"
              />
              <ListItem
                className="text-brand-primary"
                title="Information Displays"
                text="Hotels, business centers, corporate offices"
              />
              <ListItem
                className="text-brand-primary"
                title="Advertising & Promotional Screens"
                text="Retail promotions, in-store marketing, and product showcases"
              />
            </ul>
          </div>
        </div>
      </section>

      {/*INDUSTRIES WE SERVE*/}
      <section className="pt-12 md:pt-20 bg-brand-primary">
        <div className="container px-4 md:px-0 mx-auto flex flex-col justify-center items-center md:items-start gap-8 md:gap-16 md:flex-row">
          <div className="mb-12">
            <h2 className="text-text-on-dark uppercase text-5xl font-bold tracking-wide pb-8">Industries We Serve</h2>
            <ul>
              <ListItem
                className="text-text-on-dark"
                title="Hospitality"
                text="Hotels, resorts, conference centers"
              />
              <ListItem
                className="text-text-on-dark"
                title="Airports & Transportation"
                text="Digital wayfinding, flight information, transit schedules"
              />
              <ListItem
                className="text-text-on-dark"
                title="Retail & QSR"
                text="Price tags, menus, promotional boards"
              />
              <ListItem
                className="text-text-on-dark"
                title="Corporate & Office Spaces"
                text="Meeting room schedules, internal communications"
              />
            </ul>
            <div className="relative mt-12">
              <div className="absolute z-0 -left-2 bottom-2 bg-brand-accent h-[153px] w-[502px]"></div>
              <div className="relative z-1000 bg-surface-default p-8 h-[153px] w-[502px]">
                <p className="text-brand-primary">We ensure your e-paper content looks sharp, clear, and visually striking—bringing your digital signage to life in a way that is eco-friendly, energy-efficient, and effortlessly dynamic</p>
              </div>
            </div>
          </div>
          <img className="w-full max-w-[400px] h-auto object-contain" src="/images/industries-img.webp" alt="citylight with zara advertisement image" />
        </div>
      </section>

      {/*EXAMPLES*/}
      <section className="bg-brand-primary py-12 md:py-20">
        <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4 md:gap-8">
          <h2 className="text-text-on-dark uppercase text-5xl font-bold tracking-wide">Examples</h2>
          {/*Grid*/}
          <div className="grid grid-cols-12 gap-4">
            {/*Row 1*/}
            <div className="col-span-12 md:col-span-4">
              <img className="w-full h-80 object-cover" src="/images/example-1.jpg" alt="lidl advertisement" />
            </div>
            <div className="col-span-12 md:col-span-8">
              <img className="w-full h-80 object-cover" src="/images/example-2.jpg" alt="info indoor billboard with directional signs" />
            </div>
            {/*Row 2*/}
            <div className="col-span-12 md:col-span-8">
              <img className="w-full h-100 object-cover" src="/images/example-3.jpg" alt="airport departure info board" />
            </div>
            <div className="col-span-12 md:col-span-4">
              <img className="w-full h-100 object-cover" src="/images/example-4.jpg" alt="ikea advertisement" />
            </div>
            {/*Row 3*/}
            <div className="col-span-12 md:col-span-6">
              <img className="w-full h-80 object-cover" src="/images/example-5.jpg" alt="ikea happy valentine's adbertisment" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <img className="w-full h-80 object-cover" src="/images/example-6.jpg" alt="aldi coming soon billboard advertisment" />
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