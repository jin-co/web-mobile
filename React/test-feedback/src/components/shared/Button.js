import React, { useEffect } from 'react'

export const Button = (props, { version = 'primary', type = 'button' }) => {

  return (
    <button type={props.type ? props.type : type} disabled={props.isDisabled} className={`btn btn-${props.version ? props.version : version}`}>
      {props.children}
    </button>
  )
}