import React from 'react'

const Button = ({ children, version, isDisabled }) => {
  return (
    <div className={`btn btn-${version}`} isDisabled={isDisabled}>
      {children}
    </div>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true
}

export default Button
