import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
const GITHUB_URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const [users, setUser] = useState([])

  const searchUsers = async (text) => {
    const param = new URLSearchParams({
      q: text
    })
    const res = await fetch(GITHUB_URL + 'search/users?' + param)
    const {items} = await res.json()
    console.log(items)
    setUser(items)
  }

  return (
    <GithubContext.Provider
      value={{
        searchUsers,
        users,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
