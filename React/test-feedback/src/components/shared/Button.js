import React, { useEffect } from 'react'

export const Button = (props, { version = 'secondary', type = 'button' }) => {
  useEffect(() => {
    console.log(version, type)
  }, [])
  return (
    <button type={type} disabled={props.isDisabled} className={`btn btn-${version}`}>
      {props.children}
    </button>
  )
}