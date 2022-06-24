import React from 'react'
import { useState } from 'react'

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(select)
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    // select(selected)
    console.log(selected)
  }
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li className="rating">
          <input
            type="radio"
            name="rating"
            id={`rating-${i + 1}`}
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
