import React from 'react'
import { createContext, useState } from 'react'

const GithubContext = createContext()
const GITHUB_URL = 'https://api.github.com/users'

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    // const res = await fetch(`${process.env.API_URL}users`)
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider value={{
      users,
      loading,
      fetchUsers
    }}>
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext