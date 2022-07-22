import React from 'react'

const Header = ({ bgColor, color, text }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <header style={headerStyle}>
      <h1 style={{margin:'auto'}}>{text}</h1>
    </header>
  )
}

Header.defaultProps = {
  bgColor: '#efefef',
  color: '#000',
  text: 'header',
}

export default Header
