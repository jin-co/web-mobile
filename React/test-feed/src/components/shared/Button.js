import React from 'react'

export const Button = ({version, isDisabled}) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled}>
      Click
    </button>
  )
}

Button.defaultProps = {
  version: 'secondary'
}