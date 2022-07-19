import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserResult = () => {  
  const { fetchUsers, loading, users } = useContext(GithubContext)
  useEffect(() => {
    fetchUsers()
  }, [])  

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((u) => (
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResult
