import React from 'react'
import { createContext } from 'react'
import { useState, useEffect, useReducer } from 'react'
import GithubReducer from './GithubReducer'



const GithubContext = createContext()

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initial)

  return (
    <GithubContext.Provider
      value={{
        ...state,        
        dispatch
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
