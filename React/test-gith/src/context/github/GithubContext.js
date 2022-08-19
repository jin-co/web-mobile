import React from 'react'
import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const URL = 'https://api.github.com/'

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initial)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,                
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
