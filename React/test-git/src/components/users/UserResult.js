import React, { useContext } from 'react'
import { UserItem } from './UserItem'
import UserContext from '../../context/user/UserContext'

export const UserResult = () => {
  const { users } = useContext(UserContext)

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {
        users.map(u => (
          <UserItem key={u.id} user={u} />
        ))
      }
    </div>
  )
}
