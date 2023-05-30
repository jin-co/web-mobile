import React, { createContext, useState, useReducer } from 'react'
import FinderReducer from './FinderReducer'

const GITHUB_URL = 'https://api.github.com/'

const FinderContext = createContext()

export const FinderProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
    repos: [],
  }

  const [state, dispatch] = useReducer(FinderReducer, initialState)

  const searchUser = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      q: text
    })
    const res = await fetch(GITHUB_URL + `search/users?${params}`)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }

  const clearResult = () => {
    dispatch({
      type: 'CLEAR_RESULT'
    })
  }

  const getUser = async (login) => {
    setLoading()
    const res = await fetch(GITHUB_URL + `users/${login}`)
    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      dispatch({
        type: 'GET_USER',
        payload: data
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
      payload: data
    })
  }

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING'
    })
  }

  return (
    <FinderContext.Provider value={{
      searchUser,
      clearResult,
      users: state.users,
      user: state.user, getUser, getRepos,
      repos: state.repos,
      isLoading: state.isLoading
    }}>
      {children}
    </FinderContext.Provider>
  )
}

export default FinderContext
