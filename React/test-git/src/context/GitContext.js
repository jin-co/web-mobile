import React from 'react'
import { useState, useEffect, createContext, useReducer } from 'react'
import gitReducer from './GitReducer'

const GITHUB_URL = 'https://api.github.com/'

const GitContext = createContext()

export const GitProvider = (props) => {
  const initial = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(gitReducer, initial)  

  useEffect(() => {
    fetchUsers()    
  }, [])

  const fetchUsers = async () => {
    setLoading()
    const res = await fetch(GITHUB_URL + 'users')
    const data = await res.json()    
    dispatch({
      type: 'GET_USERS',
      payload: data
    })
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING'
    })
  }

  return (
    <GitContext.Provider
      value={{
        users:state.users,
        loading:state.loading
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
