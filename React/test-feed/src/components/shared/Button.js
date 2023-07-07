import React from 'react'

export const Button = ({ isDisabled, version }) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled}>Button</button>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true
}
