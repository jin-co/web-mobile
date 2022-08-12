import React from 'react'
import { createContext, useEffect, useReducer } from 'react'
import gitHubReducer from './GithubReducer'

const GITHUB_URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    loading: true
  }

  const [state, dispatch] = useReducer(gitHubReducer, initial)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL + 'users')
    const data = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: data
    })    
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
