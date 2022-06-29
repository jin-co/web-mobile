import React from 'react'

const Header = ({ bgColor, color, text }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }
  return (
    <header style={headerStyle}>
      <h1> {text} </h1>
    </header>
  )
}

Header.defaultProps = {
  text: 'Good',
  bgColor: '#feaade',
  color: '#000',
}

export default Header
