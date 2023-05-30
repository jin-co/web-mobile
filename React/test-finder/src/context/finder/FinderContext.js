import React, { createContext, useState } from 'react'

const GITHUB_URL = 'https://api.github.com/'

const FinderContext = createContext()

export const FinderProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)  

  const searchUser = async (text) => {    
    setIsLoading(true)
    const params = new URLSearchParams({
      q: text
    })
    const res = await fetch(GITHUB_URL + `search/users?${params}`)
    const { items } = await res.json()
    setUsers(items)
    setIsLoading(false)
  }

  const clearResult = () => {
    setUsers([])
  }

  const getUser = async (login) => {
    setIsLoading(true)
    const res = await fetch(GITHUB_URL + `users/${login}`)
    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      setUser(data)
    }
    setIsLoading(false)
  }

  const getRepos = async (login) => {
    setIsLoading(true)
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(GITHUB_URL + `users/${login}/repos?${params}`)
    const data = await res.json()
    setRepos(data)
    setIsLoading(false)
  }

  return (
    <FinderContext.Provider value={{
      searchUser,
      clearResult,
      users,
      user, getUser, getRepos,
      repos,
      isLoading
    }}>
      {children}
    </FinderContext.Provider>
  )
}

export default FinderContext
