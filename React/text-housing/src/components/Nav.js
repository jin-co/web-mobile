import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

export const Nav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" >
            <ExploreIcon
              onClick={() => navigate('/')}
              fill={location.pathname === '/' ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                location.pathname === '/' ? 'navbarListItemNameActive' : 'navbarListName'
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" >
            <OfferIcon
              onClick={() => navigate('/offer')}
              fill={location.pathname === '/offer' ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                location.pathname === '/offer'
                  ? 'navbarListItemNameActive'
                  : 'navbarListName'
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" >
            <PersonOutlineIcon
              onClick={() => navigate('/profile')}
              fill={location.pathname === '/profile' ? '#2c2c2c' : '#8f8f8f'}
              width="36px"
              height="36px"
            />
            <p
              className={
                location.pathname === '/profile'
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
