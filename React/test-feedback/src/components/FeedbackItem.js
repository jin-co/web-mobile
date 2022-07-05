import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Context from '../context/Context'

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(Context)
  return (
    <Card>
      <p className="rating">{feedback.rating}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeedback(feedback.id)}
      />
      <FaEdit className="edit" color="blue" onClick={editFeedback(feedback)} />
      <p className="text">{feedback.text}</p>
    </Card>
  )
}

export default FeedbackItem
