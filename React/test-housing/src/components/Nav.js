import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

const Nav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const activeRoute = (url) => {
    if (location.pathname === url) return true
  }

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate('/what')}>
            <ExploreIcon
              fill={activeRoute('/what') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            ></ExploreIcon>
            <p
            fill={activeRoute('/what') ? '#2c2c2c' : '#8f8f8f'}
            >what</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/')}>
            <ExploreIcon
              fill={activeRoute('/') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                activeRoute('/') ? 'navbarListItemNameActive' : 'navbarListName'
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/offers')}>
            <OfferIcon
              fill={activeRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                activeRoute('/offers')
                  ? 'navbarListItemNameActive'
                  : 'navbarListName'
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate('/profile')}>
            <PersonOutlineIcon
              fill={activeRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                activeRoute('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Nav
