import React from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import Context from '../context/Context'
import { useContext } from 'react'

const FeedbackItem = ({feedback}) => {
  const {deleteFeedback} = useContext(Context)
  return (
    <Card>
      <p className="rating">{feedback.rating}</p>
      <FaTimes className="close" onClick={() => deleteFeedback(feedback.id)} />
      <p>{feedback.text}</p>
    </Card>
  )
}

export default FeedbackItem
