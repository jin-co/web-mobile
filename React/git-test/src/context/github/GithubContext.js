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
  const [loading, setLoading] = useState(false)

  const initial = {
    
  }

  const [dispatch, state] = useReducer(GithubReducer, initial)

  const searchUsers = async (text) => {
    setLoading(true)
    const param = new URLSearchParams({
      q: text,
    })
    const res = await fetch(GITHUB_URL + 'search/users?' + param)
    const { items } = await res.json()
    setUsers(items)
    setLoading(false)
  }

  const getUser = async (text) => {
    setLoading(true)
    const res = await fetch(GITHUB_URL + 'users/' + text)
    const data = await res.json()
    console.log(data)
    setUser(data)
    setLoading(false)
  }

  const getRepos = async (text) => {
    setLoading(true)
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })
    const res = await fetch(GITHUB_URL + 'users/' + text + '/repos?' + params)
    const data = await res.json()
    setUser(data)
    setLoading(false)
  }

  const clearUser = () => {
    setUsers([])
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        loading,
        repos,
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
