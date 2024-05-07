import React from 'react'

export const Button = (props, { version = 'secondary', type = 'button' }) => {
  return (
    <button type={type} disabled={props.isDisabled} className={`btn btn-${version}`}>
      {props.children}
    </button>
  )
}