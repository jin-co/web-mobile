import React from 'react'

const Header = ({ title, bgColor, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color
  }
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Hi',
  bgColor: 'rgba(0, 0, 0, .4)',
  color: '#ff6895'
}

export default Header
