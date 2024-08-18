import React from "react"
import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element '>
        <NavLink to='/' className='btn text-3xl items-center '>
          News Aggregator
        </NavLink>
        <Link to='/preferences'>Preferences</Link>
      </div>
    </nav>
  )
}

export default Navbar
