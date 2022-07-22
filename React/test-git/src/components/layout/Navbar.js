import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <FaGithub className="flex-none px-2 text-3xl" />
        <Link to="/" className="text-lg font-bold">
          Github finder
        </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="flex justify-end">
          <Link to="/" className='btn btn-ghost btn-sm rounded-btn'>
            <h2>Home</h2>
          </Link>
          <Link to="/about" className='btn btn-ghost btn-sm rounded-btn'>
            <h2>About</h2>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
