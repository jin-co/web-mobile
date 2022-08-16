import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import { useContext } from 'react'
import GithubContext from '../../context/GithubContext'

const UserResult = () => {
  const { users, loading } = useContext(GithubContext)

  if (loading) {
    return <Spinner />
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
