import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import FeedContext from '../context/FeedContext'

export const RatingSelect = ({ selectRating }) => {
  const [rating, setRating] = useState(10)
  const { getFeed } = useContext(FeedContext)
  useEffect(() => {
    setRating(getFeed.feed.rating)
  }, [getFeed])

  const handleChange = (e) => {
    setRating(+e.target.value)
    selectRating(+e.target.value)
  }

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <input type="radio" value={i + 1} id={i + 1} onChange={handleChange} checked={rating == i + 1} />
            <label htmlFor={i + 1}>{i + 1}</label>
          </li>
        ))
      }
    </ul>
  )
}
