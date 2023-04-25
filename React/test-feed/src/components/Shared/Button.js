import React from 'react'

export const Button = (props) => {
  return (
    <button disabled={props.isDisabled} className={`btn btn-${props.type}`}>{props.children}</button>
  )
}

Button.defaultProps = {
  type: 'primary',
  isDisabled: true
}
