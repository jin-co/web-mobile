import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
const GITHUB_URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const [users, setUser] = useState([])
  const [loading, setLoading] = useState(false)

  const searchUsers = async (text) => {
    setLoading(true)
    const param = new URLSearchParams({
      q: text,
    })
    const res = await fetch(GITHUB_URL + 'search/users?' + param)
    const { items } = await res.json()
    setUser(items)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
