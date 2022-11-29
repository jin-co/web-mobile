import React from 'react'
import { createContext } from 'react'
import { useState, useEffect, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GITHUB_URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const initial = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [dispatch, state] = useReducer(GithubReducer, initial)

  const searchUsers = async (text) => {
    setLoading()
    const param = new URLSearchParams({
      q: text,
    })
    const res = await fetch(GITHUB_URL + 'search/users?' + param)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const getUser = async (text) => {
    const res = await fetch(GITHUB_URL + 'users/' + text)
    const data = await res.json()    
    setUser(data)
  }

  const getRepos = async (text) => {
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    const res = await fetch(GITHUB_URL + 'users/' + text + '/repos?' + params)
    const data = await res.json()
    setUser(data)
  }

  const clearUser = () => {
    setUsers([])
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        getUser,
        getRepos,
        clearUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
