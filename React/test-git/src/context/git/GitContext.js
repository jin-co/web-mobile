import React, { createContext, useState, useReducer } from 'react'
import { GitReducer } from './GitReducer'

const GitContext = createContext()

const url = process.env.REACT_APP_URL

export const GitProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GitReducer, initialState)

  const getUsers = async (text) => {
    const res = await fetch(url + `search/users?q=${text}`)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }

  const getUser = async (login) => {
    const res = await fetch(url + 'users/' + login)
    const data = await res.json()
    dispatch({
      type: 'GET_USER',
      payload: data
    })
  }

  const getRepos = async (login) => {
    const res = await fetch(url + `users/${login}/repos`)
    const data = await res.json()
    dispatch({
      type: 'GET_REPOS',
      payload: data
    })
  }

  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USERS',      
    })
  }

  return (
    <GitContext.Provider value={{
      ...state,
      getUsers,
      getUser,
      clearUser,
      getRepos
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext
