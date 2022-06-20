import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text, bgColor, color }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Greetings',
  bgColor: 'rgba(0, 0, 0, .4)',
  color: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}

export default Header
