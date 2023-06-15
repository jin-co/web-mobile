import { useState, useContext, useEffect } from 'react'
import FeedContext from '../context/FeedContext'

export const Rating = ({ inputRating }) => {
  const [rating, setRating] = useState(0)
  const { selectedFeed } = useContext(FeedContext)

  useEffect(() => {
    if(selectedFeed.isEdit) {      
      setRating(selectedFeed.feed.rating)
    }
  }, [selectedFeed])

  return (
    <ul className='rating'>
      {
        Array.from({ length: 10 }, (_, i) => (
          <li key={i}>
            <input type="radio" id={i + 1} onChange={() => {
              setRating(i + 1)
              inputRating(i + 1)
            }}
              checked={rating == i + 1}
            />
            <label htmlFor={i + 1}>
              {i + 1}
            </label>
          </li>
        ))
      }
    </ul>

  )
}
