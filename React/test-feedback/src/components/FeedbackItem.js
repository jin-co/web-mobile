import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, handleDelete }) => {
  const [] = useState()  

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <FaTimes
        onClick={() => handleDelete(item.id)}
        color="red"
        className="close"
      />
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
