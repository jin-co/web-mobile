import React from 'react'
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GithubProvider = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

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
    // const params = new URLSearchParams({
    //   q: text,
    // })
    const res = await fetch(GITHUB_URL + `users/${login}`)
    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  const getRepos = async (login) => {
    setLoading()
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(GITHUB_URL + `users/${login}/repos?${params}`)
    const data = await res.json()
    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }

  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    })

  const clearUser = () =>
    dispatch({
      type: 'CLEAR',
    })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUser,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
