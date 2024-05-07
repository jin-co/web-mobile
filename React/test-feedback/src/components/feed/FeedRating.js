import React, { useState } from 'react'

export const FeedRating = (props) => {
  const [rating, setRating] = useState()
  const [selected, setSelected] = useState(10)

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <input type="radio" value={i + 1} id={i + 1} checked={selected == i + 1} onChange={() => setSelected(i + 1)} />
            <label htmlFor={i + 1}>{i + 1}</label>
          </li>
        )
        )
      }
    </ul>
  )
}

// FeedRating.defaultProps = {
//   selected: 10
// }