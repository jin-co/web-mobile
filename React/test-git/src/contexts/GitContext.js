import React, { createContext, useReducer, useState } from 'react'
import gitReducer from './GitReducer'

const GitContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GitContextProvider = (props) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const initialStatus = {
    users: [],
    user: {},
    repos: []
  }

  const [state, dispatch] = useReducer(gitReducer, initialStatus)

  const getUsers = async (text) => {
    const res = await fetch(GITHUB_URL + 'search/users?q=' + text)
    const data = await res.json()
    dispatch({
      type: 'GET_USERS',
      payload: data.items
    })
  }

  const getUser = async (text) => {
    const res = await fetch(GITHUB_URL + 'users/' + text)
    const data = await res.json()
    dispatch({
      type: 'GET_USER',
      payload: data
    })
  }

  const getRepos = async (text) => {
    const params = new URLSearchParams({

    })
    const res = await fetch(GITHUB_URL + 'users/' + text + '/repos')
    const data = await res.json()        
    dispatch({
      type: 'GET_REPOS',
      payload: data
    })
  }

  return (
    <GitContext.Provider value={{
      getUsers,
      getUser,
      getRepos,
      ...state
    }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext