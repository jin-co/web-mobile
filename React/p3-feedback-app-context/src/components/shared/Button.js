import React from 'react'

const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.isDisabled}
      className={`btn btn-${props.version}`}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: 'false',
}

export default Button
