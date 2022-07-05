import React from 'react'

const Button = ({ children, version, isDisabled }) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true
}

export default Button
