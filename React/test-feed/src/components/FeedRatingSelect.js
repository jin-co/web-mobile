import React from 'react'

export const FeedRatingSelect = () => {
  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i + 1}>
            <input type="radio" />
            <label htmlFor="">{i + 1}</label>
          </li>
        ))
      }
    </ul>
  )
}
