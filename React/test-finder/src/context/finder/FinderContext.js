import React, { createContext, useState, useReducer } from 'react'
import FinderReducer from './FinderReducer'

const FinderContext = createContext()

export const FinderProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
    repos: [],
  }

  const [state, dispatch] = useReducer(FinderReducer, initialState)  

  return (
    <FinderContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </FinderContext.Provider>
  )
}

export default FinderContext
