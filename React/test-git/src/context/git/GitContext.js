import { createContext, useState } from "react"
const url = process.env.REACT_APP_URL

const GitContext = createContext()

export const GitProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const getUsers = async (text) => {
    const res = await fetch(url + 'search/users?q=' + text)
    const { items } = await res.json()
    setUsers(items)
  }

  return (
    <GitContext.Provider value={{
      users,
      getUsers
    }}>
      {children}
    </GitContext.Provider>
  )
}

export default GitContext