import { createContext, useState } from "react"
const url = process.env.REACT_APP_URL

const GitContext = createContext()

export const GitProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const getUsers = async (text) => {
    const res = await fetch(url + 'search/users?q=' + text)
    const { items } = await res.json()
    setUsers(items)
  }

  const getUser = async (login) => {
    const res = await fetch(url + 'users/' + login)
    if (res.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await res.json()
      console.log(data)
      setUser(data)
    }
  }

  const getRepos = async (login) => {
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })
    const res = await fetch(url + `users/${login}/repos?${params}`)
    const data = await res.json()
    setRepos(data)
  }

  return (
    <GitContext.Provider value={{
      users,
      repos,
      user,
      getUsers,
      getUser,
      getRepos,
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext