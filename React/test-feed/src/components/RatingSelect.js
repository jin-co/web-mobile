import React from 'react'
import { useState } from 'react'

export const RatingSelect = () => {
  const [rating, setRating] = useState(10)

  const handleChange = (e) => {
    setRating(+e.target.value)
  }

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li>
            <input type="radio" value={i + 1} id={i + 1} onChange={handleChange} checked={rating == i + 1} />
            <label htmlFor={i + 1}>{i + 1}</label>
          </li>
        ))
      }
    </ul>
  )
}
