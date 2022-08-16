import React from 'react'
import { createContext, useEffect, useReducer } from 'react'
import gitHubReducer from './GithubReducer'

const GITHUB_URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    loading: false
  }
  
  const [state, dispatch] = useReducer(gitHubReducer, initial)

  const searchUsers = async (text) => {
    dispatch({
      type: 'SET_LOADING',      
    }) 
    const params = new URLSearchParams({
      q: text
    })
    const res = await fetch(GITHUB_URL + `search/users?${params}`)
    const items = await res.json()
    console.log(items)
    dispatch({
      type: 'GET_USERS',
      payload: items
    })    
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
