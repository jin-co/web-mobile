import React from 'react'
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()
const GITHUB_URL = 'https://api.github.com/users'

export const GithubProvider = (props) => {
  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    setLoading()
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
