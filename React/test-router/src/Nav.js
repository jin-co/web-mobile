import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <li>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' activeClassName='active'>About</NavLink>
      </li>
    </nav>
  )
}
