import React from 'react'
import { useState, useEffect } from 'react'
import UserItem from './UserItem'

const GITHUB_URL = 'https://api.github.com/'

const UserResult = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL)
    const data = await res.json()
    setUsers(data)
  }

  return (
    <div>
<UserItem/>
    </div>
  )
}

export default UserResult