import React from 'react'
import RatingSelect from './RatingSelect'
import Card from '../Card'
import Button from '../Button'

const FeedForm = ({ feed }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Card>
      <RatingSelect />

      <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  )
}

export default FeedForm
