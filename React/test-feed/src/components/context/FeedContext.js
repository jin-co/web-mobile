import React, { createContext } from 'react'

const FeedContext = createContext()

export const FeedProvider = () => {
  return (
    <div>FeedContext</div>
  )
}

export default FeedContext
