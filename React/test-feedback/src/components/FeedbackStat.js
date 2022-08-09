import React from 'react'

const FeedbackStat = ({ feedback }) => {
  let average =
    feedback.reduce((arr, cur) => {
      return arr + cur.rating
    }, 0) / feedback.length
  return <div>FeedbackStat</div>
}

export default FeedbackStat
