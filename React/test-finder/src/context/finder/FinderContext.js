import React, { createContext, useState } from 'react'
import { useEffect } from 'react'

const GITHUB_URL = 'https://api.github.com/'

const FinderContext = createContext()

export const FinderProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    console.log(data)
  }

  const searchUser = async (text) => {
    const params = new URLSearchParams({
      q: text
    })
    const res = await fetch(GITHUB_URL + `search/users?${params}`)
    const { items } = await res.json()
    setUsers(items)
    console.log(items)
  }

  const clearResult = () => {
    setUsers([])
  }

  const getUser = async (login) => {
    const res = await fetch(GITHUB_URL + `users/${login}`)
    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      setUser(data)
    }
  }

  const getRepos = async (login) => {
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(GITHUB_URL + `users/${login}/repos?${params}`)
    const data = await res.json()
    setRepos(data)
  }

  return (
    <FinderContext.Provider value={{
      searchUser,
      clearResult,
      users,
      user, getUser, getRepos
    }}>
      {children}
    </FinderContext.Provider>
  )
}

export default FinderContext
