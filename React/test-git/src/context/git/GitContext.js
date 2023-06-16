import React, { createContext, useState } from 'react'

const GitContext = createContext()

const url = process.env.REACT_APP_URL

export const GitProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState({})

  const getUsers = async (text) => {
    const res = await fetch(url + `search/users?q=${text}`)
    const { items } = await res.json()
    setUsers(items)
  }

  const getUser = async (login) => {
    const res = await fetch(url + 'users/' + login)
    const data = await res.json()
    setUser(data)
    console.log(data)
  }

  const getRepos = async (login) => {
    const res = await fetch(url + `users/${login}/repos`)
    const data = await res.json()
    setRepos(data)
    console.log(data)
  }

  const clearUser = () => {
    setUsers([])
  }

  return (
    <GitContext.Provider value={{
      users,
      user,
      getUsers,
      getUser,
      clearUser,
      getRepos
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext
