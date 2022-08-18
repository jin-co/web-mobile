import { createContext } from 'react'
import { useEffect, useState } from 'react'

const URL = 'https://api.github.com/'

const GithubContext = createContext()

export const GithubProvider = (props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(URL + 'users')
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubContext