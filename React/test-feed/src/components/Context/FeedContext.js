import React from 'react'
import { createContext } from 'react'

const FeedContext = createContext()

const FeedProvider = (props) => {
  return (
    <FeedContext.Provider value={{
      
    }}>
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContext