import React from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ feedback, handleDelete }) => {
  return (
    <Card>
      <p className="rating"> {feedback.rating} </p>
      <FaTimes className="close" onClick={() => handleDelete(feedback.id)}/>
      <p className="text-display"> {feedback.text} </p>
    </Card>
  )
}

export default FeedbackItem
