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
    loading: false,
  }
  const [state, dispatch] = useReducer(GitReducer, initialState)

  const searchUsers = async (login) => {
    console.log(login)
    const params = new URLSearchParams({
      q: login,
    })
    const res = await fetch(URL + `search/users?${params}`)
    const data = await res.json()

    dispatch({
      type: 'SEARCH_USERS',
      payload: data.items,
    })
  }

  const clearResult = () => {
    dispatch({
      type: 'CLEAR',
    })
  }

  return (
    <GitContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearResult
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
