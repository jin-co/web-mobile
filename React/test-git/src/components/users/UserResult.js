import React, { useContext } from 'react'
import { UserItem } from './UserItem'
import UserContext from '../../context/user/UserContext'
import { Spinner } from '../../components/layout/Spinner'

export const UserResult = () => {
  const { isLoading, users } = useContext(UserContext)

  if (isLoading) {
    return <Spinner />
  } else {
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
}
