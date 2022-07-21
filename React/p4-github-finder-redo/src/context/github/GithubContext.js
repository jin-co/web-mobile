import React from 'react'
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()
// const GITHUB_URL = 'https://api.github.com/'

export const GithubProvider = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

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
