import React from 'react'
import Card from '../layout/Card'
import { useState } from 'react'

const FeedRatings = ({ ratingInput }) => {
  const [rating, setRating] = useState(10)

  const handleChange = (e) => {
    console.log(e)
    setRating()
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li>
          <input
            key={`r - ${i + 1}`}
            name={`rating-${i + 1}`}
            type="radio"
            value={i + 1}
            id={i + 1}
            checked={rating === ratingInput ? true : false}
            onChange={handleChange()}
          />
          <label htmlFor={i + 1}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedRatings
