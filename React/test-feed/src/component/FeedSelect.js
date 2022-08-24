import React from 'react'
import { useState } from 'react'

const FeedSelect = ({ selected }) => {
  const [rating, setRating] = useState(10)

  const handleChange = (e) => {
    setRating(+e.target.value)
    selected(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            value={i + 1}
            id={`rating-${i + 1}`}
            checked={rating === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedSelect
