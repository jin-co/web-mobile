import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.lenght <= 0) {
    return 'No feedback yet'
  }
  return (
    <div className="feedback-list">
      {feedback.map((f) => (
        <FeedbackItem key={f.id} item={f.item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  // feedback: PropTypes.array
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
