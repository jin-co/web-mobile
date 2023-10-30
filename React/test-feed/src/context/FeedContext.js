import React, { createContext } from 'react'

const FeedContext = createContext()

export const FeedContextProvider = (props) => {
  return (
    <FeedContext.Provider
    >
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext