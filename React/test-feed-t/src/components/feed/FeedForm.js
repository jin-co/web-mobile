import React from 'react'
import { Card } from '../shared/Card'
import { FeedRatingSelect } from './FeedRatingSelect'
import { Button } from '../shared/Button'

export const FeedForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <FeedRatingSelect />
        <div className="input-group">
          <input

          />
        </div>
        <Button type='submit'>Add</Button>
      </form>
    </Card>
  )
}
