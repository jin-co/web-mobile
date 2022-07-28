import React from 'react'
import { useState } from 'react'

const SelectRating = ({ select }) => {
  const [selected, setSelected] = useState(10)
  const handleChange = (e) => {    
    setSelected(+e.target.value)
    select(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            id={`rating-${i + 1}`}
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1 ? true : false}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default SelectRating
