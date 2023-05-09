import React, { useState } from 'react'

export const FeedRatingSelect = ({ inComingRating }) => {
  const [rating, setRating] = useState(10)

  const handleChange = (e) => {
    inComingRating(+e.target.value)
    setRating(+e.target.value)
  }

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li>
            <input type="radio" value={i + 1} id={i} checked={rating == i + 1} onChange={handleChange} />
            <label htmlFor={i}>{i + 1}</label>
          </li>
        ))
      }
    </ul>
  )
}
