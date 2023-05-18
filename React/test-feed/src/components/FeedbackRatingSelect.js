import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import FeedContext from '../context/FeedContext'

export const FeedbackRatingSelect = ({ changeRating }) => {
  const [rating, setRating] = useState(10)
  const { getFeed } = useContext(FeedContext)
  useEffect(() => {
    setRating(getFeed.rating)
  }, [getFeed])

  const onChange = (e) => {
    setRating(+e.target.value)
    changeRating(+e.target.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li>
          <input type="radio" id={`rating-${i + 1}`} value={i + 1} checked={rating == (i + 1)} onChange={onChange} />
          <label htmlFor={`rating-${i + 1}`}> {i + 1} </label>
        </li>
      ))}
    </ul>
  )
}
