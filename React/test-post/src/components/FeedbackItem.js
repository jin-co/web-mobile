import React from 'react'
import Card from '../layout/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackItem = ({ feed }) => {
  const {deleteFeed, editFeed} = useContext(FeedContext)
  
  return (
    <Card>    
      <p className="">{feed.rating}</p>
      <FaTimes className="close" color="red" onClick={() => deleteFeed(feed.id)} />
      <FaEdit className="edit" color="purple" onClick={() => editFeed()} />
      <p>{feed.text}</p>      
    </Card>
  )
}

export default FeedbackItem
