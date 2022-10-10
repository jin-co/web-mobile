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
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(GitReducer, initialState)

  const searchUsers = async (login) => {
    console.log(login)
    const params = new URLSearchParams({
      q: login,
    })
    const res = await fetch(URL + `search/users?${params}`)
    const data = await res.json()

    dispatch({
      type: 'SEARCH_USERS',
      payload: data.items,
    })
  }

  const searchUser = async (id) => {
    const res = await fetch(URL + `users/${id}`)
    const data = await res.json()
    dispatch({
      type: 'SEARCH_USER',
      payload: data,
    })
  }

  const getRepos = async (text) => {
    const param = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(URL + `users/${text}/repos?${param}`)
    const data = await res.json()
    dispatch({
      type:'GET_REPOS',
      payload: data
    })    
  }

  const clearResult = () => {
    dispatch({
      type: 'CLEAR',
    })
  }

  return (
    <GitContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearResult,
        searchUser,
        getRepos
      }}
    >
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
