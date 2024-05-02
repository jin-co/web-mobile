import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({ text }) => {
  const headerStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#ff6a95',
    display: 'flex'
  }

  return (
    <header style={headerStyles}>
      <h2>{text}</h2>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', width: '100%', color: '#fff' }}>
        <Link style={{ color: '#fff' }} to={'/'}>Home</Link>
        <Link style={{ color: '#fff' }} to={'/about'}>About</Link>
      </div>
    </header>
  )
}

// Nav.defaultProps = {
//   text: "what"
// }