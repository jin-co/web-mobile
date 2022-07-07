import React from 'react'
import { useState } from 'react'

const RatingSelect = () => {
  const [selected, setSelected] = useState(10)
  const handleClick = (e) => {
    console.log(e.target.value)
    setSelected(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            id={`rating-${i + 1}`}
            value={i + 1}
            onClick={handleClick}
            checked={selected === i + 1}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
