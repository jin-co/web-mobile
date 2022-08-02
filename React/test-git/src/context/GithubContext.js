import React from 'react'
import { createContext, useState, useEffect, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  const initial = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initial)

  const searchUser = async (text) => {
    const params = new URLSearchParams({
      q: text,
    })
    const res = await fetch(URL + `search/users?${params}`)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const clearResult = () => dispatch({ type: 'CLEAR_RESULT' })

  const setLoading = () => dispatch({ type: 'SET_LOADING' })
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUser,
        clearResult,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
