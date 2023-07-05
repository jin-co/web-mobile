import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = ({ text }) => {
  const location = useLocation()  
  const headerStyles = {
    backgroundColor: 'green'
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
      <ul style={{width: '80%', display:'flex', gap:'20px', justifyContent:'space-around'}}>
        <li>
          <Link className={location.pathname === '/' ? 'active' : ''} to={'/'} style={{ color: '#fff' }}>Home</Link>
        </li>
        <li>
          <Link className={location.pathname === '/about' ? 'active' : ''} to={'/about'} style={{ color: '#fff' }}>About</Link>          
        </li>
      </ul>
    </header>
  )
}

Header.defaultProps = {
  text: 'What'
}
