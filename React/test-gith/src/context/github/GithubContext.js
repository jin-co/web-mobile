import React from 'react'
import { createContext, useState, useEffect } from 'react'

const GithubContext = createContext()

const URL = 'https://api.github.com/'

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const res = await fetch(URL + 'users', {
      method: 'GET',
    })
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
