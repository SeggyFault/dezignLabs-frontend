import { Link, NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (

    <nav className='bg-brand-primary h-20 fixed z-1000 w-full'>
      <div className='container mx-auto h-full flex justify-between items-center text-white'>
        <NavLink to="/" className="flex gap-4">
        <img src="public/images/logo.svg" alt="Dezignlabs Logo Icon" className='h-7'/>
        <img src="public/images/Dezignlabs.svg" alt="Dezignlabs Logo Text" />
      </NavLink>
      {/* Mobile Nav */}
      <IoMenu className='text-4xl md:hidden'/>
      {/* Desktop Nav */}
      <div className='hidden md:flex justify-around items-baseline gap-4'>
        <NavLink to="/" className="hover:text-brand-accent">Home</NavLink>
        <NavLink to="/contacts" className="hover:text-brand-accent">Contacts</NavLink>
      </div>
      </div>
    </nav>
  )
}