import React from 'react'

const Button = (props) => {
  return (
    <button className={`btn btn-${props.version}`} disabled={props.isDisabled}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: true,
}

export default Button
