import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as offer } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as explore } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as person } from '../assets/svg/personOutlineIcon.svg'

const Nav = () => {
  return (
    <div>
      <Link to="/">Explore</Link>
      <Link to="/offers">offers</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Nav
