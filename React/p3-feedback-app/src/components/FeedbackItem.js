import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

const FeedbackItem = () => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('feed')

  const onClick = () => {
    setRating(8)

    // setRating((prev) => {
    //   return prev + 1
    // })
  }

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      {/* <button onClick={onClick}>click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
