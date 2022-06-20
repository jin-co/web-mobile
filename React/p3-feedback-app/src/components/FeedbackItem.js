import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({item, handleDelete}) => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('feed')

  const handleClick = () => {

  }

  const handleClickWithProperty = (id) => {
    console.log(id)
  }

  const onClick = () => {
    setRating(8)

    // setRating((prev) => {
    //   return prev + 1
    // })
  }

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className='close'>
        <FaTimes onClick={handleClick} color="purple" />
        <FaTimes onClick={() => handleDelete(item.id)} color="purple" />
      </button>
      <div className="text-display">{text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
