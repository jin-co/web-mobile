import React, { createContext, useState } from 'react'

const GitContext = createContext()

const url = process.env.REACT_APP_URL

export const GitProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  const getUsers = async (text) => {
    const res = await fetch(url + `search/users?q=${text}`)
    const { items } = await res.json()
    setUsers(items)
  }

  const getUser = async () => {
    
  }

  const clearUser = () => {
    setUsers([])
  }

  return (
    <GitContext.Provider value={{
      users,
      user,
      getUsers,
      clearUser
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext
