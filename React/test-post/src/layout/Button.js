import React from 'react'

const Button = (props) => {
  return (
    <button className={`btn btn-${props.type}`} disabled={props.isDisabled}>
      Save
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
}

export default Button
