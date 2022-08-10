import React from 'react'

const Button = (props) => {
  return (
    <button disabled={props.isDisabled} className={`btn btn-${props.version}`}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
}

export default Button
