import React from 'react'
import { useState } from 'react'

const FeedbackSelect = ({ feedback }) => {
  const [] = useState()
  const handleClick = () => {

  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            id={`rating-${i + 1}`}
            name={`rating-${i + 1}`}
            value={i + 1}
            onClick={handleClick}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedbackSelect
