import React from 'react'
import Card from '../layout/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'

const FeedbackItem = ({ feed, handleDelete }) => {
  return (
    <Card>    
      <p className="">{feed.rating}</p>
      <FaTimes className="close" color="red" onClick={() => handleDelete(feed.id)} />
      <FaEdit className="edit" color="purple" />
      <p>{feed.text}</p>      
    </Card>
  )
}

export default FeedbackItem
