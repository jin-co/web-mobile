import React from 'react'
import { FeedRating } from './FeedRating'
import { Button } from '../shared/Button'
import { Card } from '../shared/Card'

export const FeedForm = (props) => {
  return (
    <Card>
      <form >
        <h2>How would you rate your service with us?</h2>
        <FeedRating />
        <div className="input-group">
          <input

            type="text"

            placeholder="Write a review"
          />
          <Button >
            Send
          </Button>
        </div>
        {/* {message && <div className="message">{message}</div>} */}
      </form>
    </Card>
  )
}
