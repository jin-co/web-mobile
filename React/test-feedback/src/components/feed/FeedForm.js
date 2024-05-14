import React, { useContext, useEffect, useState } from 'react'
import { FeedRating } from './FeedRating'
import { Button } from '../shared/Button'
import { Card } from '../shared/Card'
import { v4 as uuid } from 'uuid'
import FeedContext from '../../context/FeedContext'

export const FeedForm = (props) => {
  const { addFeed, isEdit, editFeed, selectedEditFeed } = useContext(FeedContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    console.log(isEdit, selectedEditFeed)
    if(isEdit) {
      setText(selectedEditFeed.text)
      setRating(selectedEditFeed.rating)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(isEdit) {
      
      editFeed()
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
    setText(e.target.value)
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us?</h2>
        <FeedRating setRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type='submit' isDisabled={isDisabled} >
            Send
          </Button>
        </div>
        {/* {message && <div className="message">{message}</div>} */}
      </form>
    </Card>
  )
}
