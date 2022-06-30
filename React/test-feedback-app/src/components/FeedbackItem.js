import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ feedback, handleDelete, handleUpdate }) => {
  return (
    <Card>
      <p className="rating"> {feedback.rating} </p>
      <FaEdit
        className="edit"
        color="purple"
        onClick={() => handleUpdate(feedback.id)}
      />
      <FaTimes
        className="close"
        color="red"
        onClick={() => handleDelete(feedback.id)}
      />
      <p className="text-display"> {feedback.text} </p>
    </Card>
  )
}

export default FeedbackItem
