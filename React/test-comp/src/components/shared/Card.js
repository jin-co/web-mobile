import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
  return <div className="card">{props.children}</div>
}

Card.defaultProps = {
  children: PropTypes.node.isRequired
}

export default Card
