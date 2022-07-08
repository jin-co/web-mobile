import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Context from '../context/Context'
import { useContext } from 'react'

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, enableEditFeedback } =
    useContext(Context)

  return (
    <Card>
      <p className="rating">{feedback.rating}</p>
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeedback(feedback.id)}
      />
      <FaEdit
        className="edit"
        color="blue"
        onClick={() => enableEditFeedback(feedback)}
      />
      <p>{feedback.text}</p>
    </Card>
  )
}

export default FeedbackItem
