import CTA from "../components/CTA"
import { useNavigate } from 'react-router-dom'

export default function EpaperPage() {

  const navigate = useNavigate()

  return (
    <div>
      <section className="bg-brand-primary py-12 md:py-20">
        <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4 md:gap-8">
          <h2 className="text-text-on-dark uppercase text-5xl font-bold">Examples</h2>
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