import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'

const UserResult = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    // const res = await fetch(`${process.env.API_URL}users`)
    const res = await fetch('https://api.github.com/users')
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((u) => (
          <h3 key={u.id}>{u.login}</h3>
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResult
