import React from 'react'
import { useEffect, createContext, useReducer } from 'react'
import gitReducer from './GitReducer'

const GitContext = createContext()

export const GitProvider = (props) => {
  const initial = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(gitReducer, initial)

  return (
    <GitContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
