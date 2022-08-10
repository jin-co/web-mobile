import React from 'react'
import { useState, useEffect } from 'react'
import UserItem from './UserItem'

const GITHUB_URL = 'https://api.github.com/'

const UserResult = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
    console.log(users)
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL + 'users')
    const data = await res.json()
    console.log(data)
    setUsers(data)
    setLoading(false)
  }

  if (loading) {
    return <h3>Loading...</h3>
  } else {
    return (
      <div>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default UserResult
