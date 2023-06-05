import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext()
const URL = process.env.REACT_APP_URL

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text
    })
    const res = await fetch(URL + `search/users?${params}`)
    const { items } = await res.json()
    console.log(items)
    setUsers(items)
  }

  const getUser = async (login) => {
    const res = await fetch(URL + `users/${login}`)
    if (res.status == 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      setUser(data)
    }
  }

  const getRepos = async (login) => {
    const res = await fetch(URL + `users/${login}/repos`)
    const data = await res.json()
    console.log(data)
    setRepos(data)
  }

  const clearUser = () => {
    setUsers([])
  }
  return (
    <UserContext.Provider value={{
      users,
      user,
      repos,
      searchUsers,
      clearUser,
      getUser,
      getRepos
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
