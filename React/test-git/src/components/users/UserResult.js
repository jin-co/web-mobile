import React, { useContext } from 'react'
import { UserItem } from './UserItem'
import GitContext from '../../context/git/GitContext'
import { Spinner } from '../layout/Spinner'

export const UserResult = () => {
  const { users, loading } = useContext(GitContext)
  if(loading) {
    return <Spinner/>
  }
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  )
}
