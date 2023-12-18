import React, { createContext, useState } from 'react'

const GitContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GitContextProvider = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = async (text) => {
    const res = await fetch(GITHUB_URL + 'users/' + text)
    const data = await res.json()    
    setUsers(data)
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