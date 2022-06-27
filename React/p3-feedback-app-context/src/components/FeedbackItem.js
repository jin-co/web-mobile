import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const FeedbackItem = ({ item, handleDelete }) => {
  const [] = useState()  

  // const [rating, setRating] = useState(7)
  // const onClick = () => {
  //   setRating(8)

  //   // setRating((prev) => {
  //   //   return prev + 1
  //   // })
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        onClick={() => handleDelete(item.id)}
        color="red"
        className="close"
      />
      <div className="text-display">{item.text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
