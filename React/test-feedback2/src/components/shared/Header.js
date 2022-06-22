import React from 'react'

const Header = ({ text, bgColor, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }
  return (
    <header className="" style={headerStyle}>
      <h2>{text}</h2>
    </header>
  )
}

Header.defaultProps = {
  text: 'What',
  bgColor: 'rgba(0, 0, 0, .4)',
  color: '#feafea',
}

export default Header
