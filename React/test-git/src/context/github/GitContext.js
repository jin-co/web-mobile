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
    loading: false
  }
  const [state, dispatch] = useReducer(GitReducer, initialState)

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({
        type: 'SET_LOADING'        
      })
      const res = await fetch(URL + 'users')
      const data = await res.json()            

      dispatch({
        type:'FETCH_USERS',
        payload: data
      })
    }

    fetchUsers()
  }, [])

  return (
    <GitContext.Provider value={{ users: state.users, loading:state.loading }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
