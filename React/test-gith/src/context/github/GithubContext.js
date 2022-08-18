import React from 'react'
import { createContext, useReducer, useEffect } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const URL = 'https://api.github.com/'

export const GithubProvider = (props) => {  
  const initial = {
    users: [],
    loading: false    
  }

  const [state, dispatch] = useReducer(GithubReducer, initial)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading()
    const res = await fetch(URL + 'users', {
      method: 'GET',
    })
    const data = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })    
  }
  
  const searchUsers = async () => {
    setLoading()
    const res = await fetch(URL + 'users', {
      method: 'GET',
    })
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
    <GithubContext.Provider
      value={{
        users:state.users,
        loading:state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
