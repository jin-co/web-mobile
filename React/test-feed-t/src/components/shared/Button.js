import React from 'react'

export const Button = ({version, isDisabled}) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled}>Button</button>
  )  
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true
}
