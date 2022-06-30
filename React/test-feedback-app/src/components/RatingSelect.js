import React from 'react'
import { useState } from 'react'

const RatingSelect = ({select}) => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.target.value)
    select(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i}`}>
          <input
            type="radio"
            value={i + 1}
            id={`num${i + 1}`}
            name="rating"
            onChange={handleChange}
            checked={i + 1 === selected ? true : false}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
