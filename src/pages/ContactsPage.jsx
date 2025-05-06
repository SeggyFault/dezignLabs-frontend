import { HiOutlineEnvelope } from 'react-icons/hi2'
import { FaWhatsapp } from "react-icons/fa"

export default function ContactsPage() {
  return (
    <section className="bg-gradient-to-b from-brand-accent to-brand-primary flex justify-center items-center relative overflow-hidden min-h-screen">
      <div className="container px-4 md:px-0 relative w-full h-screen flex items-center justify-center">
        <div className="relative w-full max-w-3xl aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/rjjtDRskvR0?autoplay=1&mute=1&loop=1&controls=0&playlist=rjjtDRskvR0" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            loading="lazy"
            allowfullscreen>
          </iframe>
          <div className="absolute -bottom-16 -right-16 p-6 md:p-8 rounded-t-3xl rounded-bl-3xl backdrop-blur-sm bg-white/80 shadow-lg max-w-[90%]">
            <h2 className='uppercase text-brand-primary text-5xl font-bold mb-4'>Our contacts</h2>

            <div className="flex gap-4 items-center">
              <HiOutlineEnvelope className='text-brand-primary text-2xl md:text-3xl' />
              <span className='text-brand-primary font-bold'>Email</span>
              <span>hhhhhhhhhh@gmail.com</span>
            </div>

            <div className="flex gap-4 ustify-between items-center">
              <FaWhatsapp className='text-brand-primary text-2xl md:text-3xl' />
              <span className='text-brand-primary font-bold'>WhatsApp</span>
              <span>+34 566 666</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}