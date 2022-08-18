import React from 'react'
import { useState, useEffect } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const URL = 'https://api.github.com/'

const UserResult = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)  

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    const res = await fetch(URL + 'users', {
      method: 'GET',
    })
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  if(loading) {
    return <Spinner/>
  } 

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} item={user} />
      ))}
    </div>
  )
}

export default UserResult
