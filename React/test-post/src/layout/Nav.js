import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (Props) => {
  return (
    <div style={{width: '100%', display:'flex', justifyContent:'space-around'}}>    
      <Link to="/">{Props.title}</Link>      
      <Link to="/about">About</Link>
    </div>
  )
}

Nav.defaultProps = {
  title: 'Home'
}

export default Nav
