import React from 'react'
import { useEffect, createContext, useReducer } from 'react'
import gitReducer from './GitReducer'

const GITHUB_URL = 'https://api.github.com/'

const GitContext = createContext()

export const GitProvider = (props) => {
  const initial = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(gitReducer, initial)

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

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USER',
    })
  }

  return (
    <GitContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        clearUser,
        searchUsers,
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
