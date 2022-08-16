import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedbackItem = ({ item }) => {
  const { deleteFeed, getFeed} = useContext(FeedContext)
  return (
    <Card>
      <p> {item.text} </p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeed(item.id)}
      />
      <FaEdit className="edit" color="purple" onClick={() => getFeed(item)} />
      <p> {item.rating} </p>
    </Card>
  )
}

export default FeedbackItem
