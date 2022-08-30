import React from 'react'
import { useEffect, createContext, useReducer } from 'react'
import gitReducer from './GitReducer'

const GITHUB_URL = 'https://api.github.com/'

const GitContext = createContext()

export const GitProvider = (props) => {
  const initial = {
    users: [],
    user: {},
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

  const getUser = async (login) => {
    setLoading()
    const res = await fetch(GITHUB_URL + `users/${login}`)

    if(res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      console.log(data)
      dispatch({
        type: 'GET_USER',
        payload: data
      })      
    }
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
        user: state.users,
        loading: state.loading,
        clearUser,
        searchUsers,
        getUser
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
