import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbackItem = ({ item }) => {
  const { feedback, deleteFeedback, feedbackEdit } = useContext(FeedbackContext)

  return (
    <Card>
      <p className="rating">{item.rating}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeedback(item.id)}
      />
      <FaEdit
        className="edit"
        color="purple"
        onClick={() => feedbackEdit(item)}
      />
      <p>{item.text}</p>
    </Card>
  )
}

export default FeedbackItem
