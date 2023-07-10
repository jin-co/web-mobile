import React, { useContext, useEffect, useState } from 'react'
import FeedContext from '../context/Feed'

export const FeedRating = ({ select }) => {
  const [selected, setSelected] = useState(10)
  const { getFeed } = useContext(FeedContext)

  useEffect(() => {
    if (getFeed.isEdit) {
      setSelected(getFeed.feed.rating)
    }
  }, [getFeed])

  const handleChange = (e) => {
    setSelected(+e.target.value)
    select(+e.target.value)
  }

  return (
    <ul className="rating">
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i + 1}>
            <input type="radio" id={i + 1} value={i + 1} onChange={handleChange} checked={selected == i + 1} />
            <label htmlFor={i + 1}>{i + 1}</label>
          </li>
        ))
      }
    </ul>
  )
}
