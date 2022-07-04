import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ feedback, handleDelete }) => {
  return (
    <Card>
      <p className="rating">{feedback.rating}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => handleDelete(feedback.id)}
      />
      <FaEdit className="edit" color="blue" />
      <p className="text">{feedback.text}</p>
    </Card>
  )
}

export default FeedbackItem
