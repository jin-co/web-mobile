import React from 'react'

const Header = ({ text, bgColor, color }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,    
  }

  return (
    <div style={headerStyle}>
      <header className="container">
        <h1 style={{width: '100%', textAlign: "center"}}>{text}</h1>
      </header>
    </div>
  )
}

Header.defaultProps = {
  text: 'header',
  bgColor: 'white',
  color: '#000',
}

export default Header
