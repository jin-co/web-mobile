import React from 'react'
import { useState, useEffect, useContext } from 'react'
import FeedContext from '../context/FeedContext'

const RatingSelect = ({ ratingSelected }) => {
  const [selected, setSelected] = useState(10)
  const { editMode } = useContext(FeedContext)

  useEffect(() => {
    if (editMode.edit) {
      setSelected(+editMode.item.rating)
    }
  }, [editMode])

  const handleChange = (e) => {
    setSelected(+e.target.value)    
    ratingSelected(e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            id={`rating - ${i + 1}`}
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`rating - ${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
