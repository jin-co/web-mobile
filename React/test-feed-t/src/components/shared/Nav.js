import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-around', listStyle:'none' }}>
      <li>
        <NavLink to={'/'} activeClassName='active' style={{color:'#fff'}}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'} activeClassName='active' style={{color:'#fff'}}>About</NavLink>
      </li>
    </nav>
  )
}
