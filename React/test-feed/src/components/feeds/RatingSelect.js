import React from 'react'
import { useState } from 'react'

const RatingSelect = () => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    console.log(e.currentTarget.value)
    setSelected(+e.currentTarget.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`num-${i+1}`}>
          <input
            type="radio"            
            id={`num-${i + 1}`}
            name={i + 1}
            value={i + 1}
            onChange={handleChange}
            checked={i + 1 === selected}
          />
          <label htmlFor={i + 1}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
