import React from 'react'
import { RatingSelect } from './RatingSelect'
import { Card } from './shared/Card'
import { Button } from './shared/Button'

export const FeedForm = () => {
  return (
    <Card>
      <form action="" >
        <h2>How would you rate your service with us?</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" >
            Send
          </Button>
        </div>
        
      </form>
    </Card>
  )
}
