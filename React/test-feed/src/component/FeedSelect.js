import React from 'react'
import { useState, useEffect, useContext } from 'react'
import FeedContext from '../context/FeedContext'

const FeedSelect = ({ selected }) => {
  const [rating, setRating] = useState(10)
  const { getEditItem } = useContext(FeedContext)

  useEffect(() => {
    if (getEditItem.edit) {
      setRating(getEditItem.item.rating)
    }
  }, [getEditItem])

  const handleChange = (e) => {
    setRating(+e.target.value)
    selected(+e.target.value)
  }

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}>
          <input
            type="radio"
            value={i + 1}
            id={`rating-${i + 1}`}
            checked={rating === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default FeedSelect
