import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <p className="rating">{item.rating}</p>
      <FaTimes className="close" color="red" />
      <FaEdit className="edit" color="purple" />
      <p>{item.text}</p>
    </Card>
  )
}

export default FeedbackItem
