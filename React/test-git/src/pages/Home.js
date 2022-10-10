import React from 'react'
import UserResult from '../components/users/UserResult'
import UserSearch from '../components/users/UserSearch'
import { useState, useEffect } from 'react'

const URL = 'https://api.github.com/'

const Home = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async() => {
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
    <div>
      <UserSearch />
      <UserResult users={users} loading={loading} />
    </div>
  )
}

export default Home