import React, { createContext, useReducer, useState } from 'react'
import gitReducer from './GitReducer'

const GitContext = createContext()

export const GitContextProvider = (props) => {
  const initialStatus = {
    users: [],
    user: {},
    repos: []
  }

  const [state, dispatch] = useReducer(gitReducer, initialStatus)  

  return (
    <GitContext.Provider value={{
      dispatch,
      ...state
    }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext