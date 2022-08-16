import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline text-3xl" />
          <Link to="/">Finder</Link>
        </div>

        <div className="flex-1">
          <div className="flex">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/notfound'></Link>
            <Link to='/*'></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
