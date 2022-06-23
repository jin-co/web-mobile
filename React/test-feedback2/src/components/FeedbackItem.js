import React from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, handelDelete }) => {
  return (
    <Card>
      <h4>{item.rating}</h4>
      <FaTimes className="close" onClick={() => handelDelete(item.id)} />
      <h4>{item.text}</h4>
    </Card>
  )
}

export default FeedbackItem
