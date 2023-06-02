import React, { useState, useContext, useEffect } from 'react'
import { RatingSelect } from './RatingSelect'
import { Card } from './shared/Card'
import { Button } from './shared/Button'
import { v4 as uuid } from 'uuid'
import FeedContext from '../context/FeedContext'

export const FeedForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [isDisabled, setIsDisabled] = useState(true)

  const { addFeed, getFeed, updateFeed } = useContext(FeedContext)

  useEffect(() => {
    setRating(getFeed.feed.rating)
    setText(getFeed.feed.text)
  }, [getFeed])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeed = {
      text,
      rating
    }
    if (getFeed.feed.isEdit) {
      updateFeed(getFeed.feed.id, newFeed)
    } else {
      newFeed.id = uuid()
      addFeed(newFeed)
    }

  }

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selectRating={(e) => setRating(e)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}
