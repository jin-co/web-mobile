import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
const GITHUB_URL = 'https://api.github.com/users'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const [users, setUser] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    setUser(data)
  }

  return (
    <GithubContext.Provider
      value={{
        fetchUsers,
        users
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
