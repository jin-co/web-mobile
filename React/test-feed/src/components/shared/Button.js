import React from 'react'

export const Button = ({ children, version, isDisabled }) => {
  return (
    <button
      className={`btn btn${version}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'secondary'
}
