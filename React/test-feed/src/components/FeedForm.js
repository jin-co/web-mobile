import React from 'react'
import { Card } from './shared/Card'
import {Button} from './shared/Button'
import { FeedRating } from './FeedRating'

export const FeedForm = () => {
  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <FeedRating/>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit">
            Send
          </Button>
        </div>        
      </form>
    </Card>
  )
}
