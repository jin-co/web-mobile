import React from 'react'
import { useEffect, createContext, useReducer } from 'react'
import gitReducer from './GitReducer'

const GITHUB_URL = 'https://api.github.com/'

const GitContext = createContext()

export const GitProvider = (props) => {
  const initial = {
    users: [],
    user: {},
    repos: [],
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

    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      console.log('user:', data)
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  const getRepos = async (login) => {
    setLoading()
    const params = new URLSearchParams({
      sort: 'create',
      per_page: 10,
    })
    const res = await fetch(GITHUB_URL + `users/${login}/repos?${params}`)

    const data = await res.json()
    console.log(data)
    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
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
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        clearUser,
        searchUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
