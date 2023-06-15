import React, { useState } from 'react'

export const Rating = ({ inputRating }) => {
  const [rating, setRating] = useState(0)

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <input type="radio" id={i + 1} onChange={() => {
              setRating(i + 1)
              inputRating(i + 1)
            }}
              checked={rating == i + 1}
            />
            <label htmlFor={i + 1}>
              {i + 1}
            </label>
          </li>
        ))
      }
    </ul>

  )
}
