import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

const FeedbackItem = ({ item }) => {
  const { deleteFeed, getEditItem } = useContext(FeedbackContext)

  return (
    <Card>
      <p className="text-display">{item.text}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeed(item.id)}
      />
      <FaEdit
        className="edit"
        color="purple"
        onClick={() => getEditItem(item)}
      />
      <p className="rating-display">{item.rating}</p>
    </Card>
  )
}

export default FeedbackItem
