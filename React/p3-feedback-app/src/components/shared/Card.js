import PropTypes from 'prop-types'

const Card = (props) => {
  // return <div className={`card ${reversed && 'reverse'}`}>{props.children}</div>
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.reversed ? 'rgba(0,0,0,.4)' : '#fff',
        color: props.reversed ? '#fff' : '#000',
      }}
    >
      {props.children}
    </div>
  )
}

Card.defaultProps = {
  reversed: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reversed: PropTypes.bool,  
}

export default Card
