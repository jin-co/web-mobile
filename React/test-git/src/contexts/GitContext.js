import React, { createContext, useState } from 'react'

const GitContext = createContext()
const GITHUB_URL = 'https://api.github.com/'

export const GitContextProvider = (props) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const getUsers = async (text) => {
    console.log(text)
    const res = await fetch(GITHUB_URL + 'search/users?q=' + text)
    const data = await res.json()
    console.log(data)
    setUsers(data.items)
    console.log(users)
  }

  const getUser = async (text) => {
    const res = await fetch(GITHUB_URL + 'users/' + text)
    const data = await res.json()
    setUser(data)
  }

  const getRepos = async (text) => {
    const params = new URLSearchParams({
      
    })
    const res = await fetch(GITHUB_URL + 'users/' + text + '/repos')
    const data = await res.json()
    console.log('repos', data)
    setRepos(data)
  }

  return (
    <GitContext.Provider value={{
      getUsers,
      getUser,
      getRepos,
      users,
      user,
      repos
    }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext