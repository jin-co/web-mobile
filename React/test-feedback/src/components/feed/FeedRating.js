import React, { useEffect, useState } from 'react'

export const FeedRating = (props) => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(e.target.value)
    props.setRating(e.target.value)
  }

  useEffect(() => {
    setSelected(props.rating)
  }, [props.rating])

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <input type="radio" value={i + 1} id={i + 1} checked={selected == i + 1} onChange={handleChange} />
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