import React from 'react'
import { useState, useEffect } from 'react'
import UserItem from './UserItem'

const GITHUB_URL = 'https://api.github.com/users'

const UserResult = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(GITHUB_URL)
      const data = await res.json()
      setUser(data)
    }
    fetchUsers()
    console.log(user)
  }, [])
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {user.map((u) => (
        <UserItem key={u.id} user={user} />
      ))}
    </div>
  )
}

export default UserResult
