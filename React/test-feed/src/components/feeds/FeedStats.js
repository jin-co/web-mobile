import React from 'react'

const FeedStats = ({ feed }) => {
  const average = feed.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feed.length

  return (
    <div>
      <p> total: {feed.length} </p>
      <p> average: {average} </p>
    </div>
  )
}

export default FeedStats
