import React, { createContext, useState } from 'react'

const GitContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GitContextProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = async (text) => {
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    console.log(data)
    setUsers(data)
  }

  return (
    <GitContext.Provider value={{
      getUsers,
      users
    }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext