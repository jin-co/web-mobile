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

  const fetchUsers = async () => {
    const res = await fetch(URL + 'users')
    const data = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
    // setUsers(data)
    // setLoading(false)
  }

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
