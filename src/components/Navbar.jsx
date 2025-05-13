import { Link, NavLink } from 'react-router-dom'
import { IoMenu, IoClose } from "react-icons/io5"
import { useState } from 'react'

export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-brand-primary h-20 fixed z-1000 w-full'>
      <div className='container px-4 md:px-0 mx-auto h-full flex justify-between items-center text-white'>
        <NavLink to="/" className="flex gap-4">
        <img src="/images/Logo.svg" alt="Dezignlabs Logo Icon" className='h-7'/>
        <img src="/images/Dezignlabs.svg" alt="Dezignlabs Logo Text" />
      </NavLink>
      {/* Mobile Nav Toggle Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        { menuOpen ? (
          <IoClose className='text-4xl'/>
        ) : (
          <IoMenu className='text-4xl'/>
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full h-screen bg-brand-primary md:hidden z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink 
              to="/" 
              className="text-5xl text-text-on-dark font-medium my-10 hover:text-brand-accent"
              onClick={() => setMenuOpen(false)}
            >Home</NavLink>
            <NavLink 
              to="/contacts" 
              className="text-5xl  text-text-on-dark font-medium my-10 hover:text-brand-accent"
              onClick={() => setMenuOpen(false)}
            >Contacts</NavLink>
          </div>
        </div>
      )}

      {/* Desktop Nav */}
      <div className='hidden md:flex justify-around items-baseline gap-4'>
        <NavLink to="/" className="hover:text-brand-accent">Home</NavLink>
        <NavLink to="/contacts" className="hover:text-brand-accent">Contacts</NavLink>
      </div>
      </div>
    </nav>
  )
}