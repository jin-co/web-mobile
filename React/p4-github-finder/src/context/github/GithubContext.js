import { createContext } from 'react'
import { useState } from 'react'

const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
    const data = await res.json()
    setUsers(data)
    setIsLoading(false)
  }

  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext
