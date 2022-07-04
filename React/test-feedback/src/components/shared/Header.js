import React from 'react'

const Header = ({ text, bgColor, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }
  return (
    <header style={headerStyle}>
      <h1>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
  text: 'Header',
  bgColor: '#000',
  color: '#fff',
}

export default Header
