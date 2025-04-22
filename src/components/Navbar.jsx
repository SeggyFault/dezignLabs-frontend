import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex gap-4 justify-center align-middle text-white bg-black'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  )
}