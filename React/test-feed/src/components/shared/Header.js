import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ text }) => {
  const headerStyles = {
    backgroundColor: 'blue',
    color: '#fff'
  }
  return (
    <header style={headerStyles}>
      <div>
        <h2>
          <Link style={{ color: '#fff' }} to={'/'}>
            {text}
          </Link>
        </h2>
        <ul>
          <li>
            <Link style={{ color: '#fff' }} to={'/about'} >About</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Header'
}