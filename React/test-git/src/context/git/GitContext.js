import { createContext, useReducer, useState } from "react"
import { GitReducer } from "./GitReducer"
const url = process.env.REACT_APP_URL

const GitContext = createContext()

export const GitProvider = ({ children }) => {
  const initial = {
    users: [],
    user: {},
    repos: [],
    isLoading: false
  }

  const [state, dispatch] = useReducer(GitReducer, initial)

  const getUsers = async (text) => {
    const res = await fetch(url + 'search/users?q=' + text)
    const { items } = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }

  const getUser = async (login) => {
    const res = await fetch(url + 'users/' + login)
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
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(url + `users/${login}/repos?${params}`)
    const data = await res.json()
    dispatch({
      type: 'GET_REPOS',
      payload: data
    })
  }

  return (
    <GitContext.Provider value={{
      ...state,
      getUsers,
      getUser,
      getRepos,
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext