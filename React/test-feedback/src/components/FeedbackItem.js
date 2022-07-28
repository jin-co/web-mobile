import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ item, handleDelete }) => {
  

  return (
    <Card>
      <p className="text-display">{item.text}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => handleDelete(item.id)}
      />
      <FaEdit className="edit" color="purple" />
      <p className="rating-display">{item.rating}</p>
    </Card>
  )
}

export default FeedbackItem
