import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar
