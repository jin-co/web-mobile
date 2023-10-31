import React, { useContext, useState } from 'react'
import { FeedRating } from './FeedRating'
import { Card } from './shared/Card'
import { Button } from './shared/Button'
import FeedContext from '../context/FeedContext'

export const FeedForm = () => {
  const { addFeed } = useContext(FeedContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const handleChange = (e) => {
    setText(e.target.value)
    if (e.target.value.length > 10) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(rating)
    addFeed({
      text,
      rating
    })
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedRating formSetRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type='text'
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}
