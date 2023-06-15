import React, { useContext, useEffect, useState } from 'react'
import { Card } from './shared/Card'
import { Rating } from './Rating'
import { Button } from './shared/Button'
import { v4 as uuid } from 'uuid'
import FeedContext from '../context/FeedContext'

export const FeedForm = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const { addFeed, selectedFeed, updateFeed } = useContext(FeedContext)

  useEffect(() => {
    if(selectedFeed.isEdit) {
      setText(selectedFeed.feed.text)
      setRating(selectedFeed.feed.rating)
    }
  }, [selectedFeed])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(selectedFeed.isEdit) {
      const newFeed = {
        id: selectedFeed.feed.id,
        text,
        rating
      }
      updateFeed(newFeed, selectedFeed.feed.id)
    } else {
      const newFeed = {
        id: uuid(),
        text,
        rating
      }
      addFeed(newFeed)
    }    
  }

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Rating inputRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  )
}
