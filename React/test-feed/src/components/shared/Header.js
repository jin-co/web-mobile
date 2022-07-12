import React from 'react'

const Header = ({ bgColor, text, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }
  return (
    <header style={headerStyle}>
      <h4 style={{ margin: 'auto' }}>Header</h4>
    </header>
  )
}

Header.defaultProps = {
  text: 'Hi',
  bgColor: '#fff',
  color: '#000',
}

export default Header
