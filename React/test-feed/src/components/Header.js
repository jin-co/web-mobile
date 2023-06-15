import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const Header = ({ title }) => {
  const navigate = useNavigate()
  const headerStyle = {
    height: '100px',
    backgroundColor: '#fff',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    color: '#000'
  }
  return (
    <div>
      {title}
      <ul style={headerStyle}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={() => navigate('/about')}>
          {/* <Link to='/about'>About</Link> */}
          About
        </li>
      </ul>
    </div>
  )
}

Header.defaultProps = {
  title: 'Home'
}
