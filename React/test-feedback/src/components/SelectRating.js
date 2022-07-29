import React from 'react'
import { useState } from 'react'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const SelectRating = ({ select }) => {
  const {editMode} = useContext(FeedbackContext)
  const [selected, setSelected] = useState(10)

  useEffect(() => {
    if (editMode.edit) {
      setSelected(editMode.item.rating)      
    }
  }, [editMode])

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
