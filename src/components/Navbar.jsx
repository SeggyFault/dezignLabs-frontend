import { Link, NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (

    <nav className='flex justify-around items-center text-white bg-brand-primary h-20 w-full fixed z-1000'>
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
    </nav>
  )
}