import React, { createContext, useState } from 'react'

const GitContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GitContextProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = async (text) => {
    console.log(text)
    const res = await fetch(GITHUB_URL + 'search/users?q=' + text)
    const data = await res.json()    
    console.log(data)
    setUsers(data.items)
    console.log(users)
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