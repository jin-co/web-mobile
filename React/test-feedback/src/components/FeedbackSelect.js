import React from 'react'
import { useState } from 'react'

const FeedbackSelect = ({ feedback, select }) => {
  const [selected, setSelected] = useState(10)
  const handleChange = (e) => {
    console.log(e.target.value)
    setSelected(+e.target.value)
    select(e.target.value)
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
            onClick={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedbackSelect
