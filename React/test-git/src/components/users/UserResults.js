import React from 'react'
import UserItem from './UserItem'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'

const URL = 'https://api.github.com/'

const UserResults = () => {
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

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default UserResults
