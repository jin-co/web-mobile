import React from 'react'
import { createContext, useReducer, useEffect } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const URL = 'https://api.github.com/'

export const GithubProvider = (props) => {
  const initial = {
    users: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initial)

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text
    })
    setLoading()
    const res = await fetch(URL + `search/users?${params}`, {
      method: 'GET',
    })
    const {items} = await res.json()
    console.log(items)

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

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,        
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
