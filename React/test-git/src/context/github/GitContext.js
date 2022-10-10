import React from 'react'
import { createContext } from 'react'

const GitContext = createContext()

export const GitProvider = (props) => {
  return <GitContext.Provider value={{}}>{props.children}</GitContext.Provider>
}

export default GitContext
