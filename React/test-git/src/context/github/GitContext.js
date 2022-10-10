import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'


const URL = 'https://api.github.com/'

const GitContext = createContext()

export const GitProvider = (props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      const res = await fetch(URL + 'users')
      const data = await res.json()
      console.log(data)
      setUsers(data)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  return (
    <GitContext.Provider value={{ users, loading }}>
      {props.children}
    </GitContext.Provider>
  )
}

export default GitContext
