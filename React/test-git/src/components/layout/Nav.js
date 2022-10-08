import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Nav = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2" />
          <Link to="/">{title}</Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Nav.defaultProps = {
  title: 'Gito',
}

export default Nav
