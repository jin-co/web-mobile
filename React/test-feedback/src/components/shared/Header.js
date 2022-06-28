import React from 'react'

const Header = ({ text, bgColor, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <Header style={headerStyle}>
      <h2> {{ text }} </h2>
    </Header>
  )
}

Header.defaultProps = {
  text: 'Header',
  bgColor: '#efefef',
  color: '#000',
}

export default Header
