import React from 'react'
import { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/GithubContext'

const UserResult = () => {
  const { users, loading } = useContext(GithubContext)
  if (loading) {
    return <Spinner />
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
