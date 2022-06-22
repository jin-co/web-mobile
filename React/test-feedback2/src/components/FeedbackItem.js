import React from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ feedback, handleDelete }) => {  

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close">
        <FaTimes color="red" onClick={() => handleDelete(feedback.id)} />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  )
}

export default FeedbackItem
