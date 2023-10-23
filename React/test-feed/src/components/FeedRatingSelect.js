import React from 'react'

export const FeedRatingSelect = () => {
  return (
    <ul className='rating'>
    {
      Array.from({length:10}, (_, i) => {
        <li>
          <input type="radio" />
        </li>
      })
    }
    </ul>
  )
}
