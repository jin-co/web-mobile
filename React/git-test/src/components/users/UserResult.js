import React from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'
import { useContext } from 'react'

const UserResult = () => {
  const { users } = useContext(GithubContext)
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  )
}

export default UserResult
