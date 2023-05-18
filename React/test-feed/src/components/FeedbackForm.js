import React, { useEffect } from 'react'
import { Card } from '../components/Shared/Card'
import { FeedbackRatingSelect } from '../components/FeedbackRatingSelect'
import { Button } from '../components/Shared/Button'
import { useState, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import FeedContext from '../context/FeedContext'


export const FeedbackForm = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [text, setText] = useState('')
  const { addFeed, getFeed } = useContext(FeedContext)

  useEffect(() => {        
    setText(getFeed.text)
  }, [getFeed])


  const handleSubmit = (e) => {
    e.preventDefault()
    let feed = {
      id: uuid(),
      rating,
      text
    }
    console.log(feed)
    addFeed(feed)
  }

  const onInputChange = (e) => {
    if (e.target.value.length > 10) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
    console.log(e.target.value)
    setText(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRatingSelect changeRating={(r) => setRating(r)} />
        <div className="input-group">
          <input
            placeholder="Write a review"
            onChange={onInputChange}
            value={text}
          />
        </div>
        <Button type='submit' isDisabled={isDisabled}>Add</Button>
      </form>
    </Card>
  )
}
