import React from 'react'
import Card from '../layout/Card'
import { useState } from 'react'

const FeedRatings = ({ ratingInput }) => {
  const [rating, setRating] = useState(10)

  const handleChange = (e) => {
    setRating(+e.target.value)
    ratingInput(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`ra - ${i + 1}`}>
          <input
            name={`rating-${i + 1}`}
            type="radio"
            value={i + 1}
            id={i + 1}
            checked={rating === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={i + 1}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedRatings
