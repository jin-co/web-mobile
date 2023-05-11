import React, { Children } from 'react'
import { createContext, useState } from 'react'

const FeedContext = createContext()

export const FeedProvider = ({ children }) => {
  return (
    <FeedContext.Provider value={{
      
    }}>
      {children}
    </FeedContext.Provider>
  )
}
