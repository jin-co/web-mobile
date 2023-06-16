import React, { createContext, useReducer } from 'react'
import { GitReducer } from './GitReducer'

const GitContext = createContext()

export const GitProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GitReducer, initialState)

  return (
    <GitContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext
