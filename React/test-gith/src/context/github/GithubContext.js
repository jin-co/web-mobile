import React from 'react'
import { createContext, useReducer, useEffect } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const URL = 'https://api.github.com/'

export const GithubProvider = (props) => {  
  const initial = {
    users: [],
    user: {},
    loading: false    
  }

  const [state, dispatch] = useReducer(GithubReducer, initial)  

  const searchUsers = async (text) => {
    setLoading()
    const res = await fetch(URL + `search/${text}`, {
      method: 'GET',
    })
    const data = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: data
    })    
  }
  
  const searchUser = async (text) => {
    setLoading()
    const res = await fetch(URL + `search/users/${text}`, {
      method: 'GET',
    })
    const data = await res.json()
    console.log(data)

    dispatch({
      type: 'GET_USER',
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
        searchUsers,
        searchUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
