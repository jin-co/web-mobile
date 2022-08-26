import React from 'react'
import UserResult from '../component/users/UserResult'
import UserSearch from '../component/users/UserSearch'
import { useState, useEffect } from 'react'

const GITHUB_URL = 'https://api.github.com/'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
    console.log(users)
  }, [])

  const fetchUsers = async () => {
    const res = await fetch(GITHUB_URL + 'users')
    const data = await res.json()
    setUsers(data)    
  }

  return (
    <div>
      <UserSearch />
      <UserResult users={users} />
    </div>
  )
}

export default Home
