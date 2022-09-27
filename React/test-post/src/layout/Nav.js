import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{width: '100%', display:'flex', justifyContent:'space-around'}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Nav
