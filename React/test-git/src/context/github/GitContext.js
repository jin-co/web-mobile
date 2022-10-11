import React from 'react'
import { createContext } from 'react'
import { useState, useEffect, useReducer } from 'react'
import GitReducer from './GitReducer'

const URL = 'https://api.github.com/'

const GitContext = createContext()

export const GitProvider = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(GitReducer, initialState)  

  return (
    <GitContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
