import React, { useState } from 'react'

export const FeedRating = ({formSetRating}) => {
  const [rating, setRating] = useState(10)

  const handleChange = (e) => {
    setRating(e.target.value)
    formSetRating(e.target.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            value={i + 1}
            id={i + 1}
            checked={rating == i + 1}
            onChange={handleChange}
          />
          <label htmlFor={i + 1}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}