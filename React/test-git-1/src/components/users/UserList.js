import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import { useEffect, useState } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUsers()
    console.log(users)
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('https://api.github.com/users')
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {users.map((u) => (
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserList
