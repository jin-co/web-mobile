import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({ text }) => {
  const headerStyles = {
    backgroundColor: 'yellow',
    color: '#000'
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link to='/'>{text}</Link>
        <Link to='/about'>About</Link>
      </div>
    </header>
  )
}

Nav.defaultProps = {
  text: 'App'
}