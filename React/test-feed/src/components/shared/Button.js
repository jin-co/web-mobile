import React from 'react'

export const Button = (props) => {
  return (
    <button className={`btn btn-${props.version}`}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary'
}
