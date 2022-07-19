import React from 'react'
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GithubProvider = (props) => {
  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      q: text,
    })
    const res = await fetch(GITHUB_URL + `search/users?${params}`)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    })

  //test
  const clearUser = () =>
    dispatch({
      type: 'CLEAR',
    })
  //test

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
