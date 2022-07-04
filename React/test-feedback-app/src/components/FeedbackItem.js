import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Context from './context/Context'

const FeedbackItem = ({ handleUpdate }) => {
  const {feedback, deleteFeedback} = useContext(Context)

  return (
    <Card>
      <p className="rating"> {feedback.rating} </p>
      <FaEdit
        className="edit"
        color="purple"
        onClick={() => handleUpdate(feedback.id)}
      />
      <FaTimes
        className="close"
        color="red"
        onClick={() => deleteFeedback(feedback.id)}
      />
      <p className="text-display"> {feedback.text} </p>
    </Card>
  )
}

export default FeedbackItem
