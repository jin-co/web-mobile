import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ text, bgColor, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }
  return (
    <nav>
      {text}

      <ul className="">
        <li>
          <Link style={headerStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={headerStyle} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

Header.defaultProps = {
  text: 'Header text',
  color: '#fff',
}

export default Header
