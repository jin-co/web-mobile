import React from 'react'
import { UserItem } from './UserItem'
import { useContext } from 'react'
import FinderContext from '../../../context/finder/FinderContext'

export const UserResult = () => {
  const { users } = useContext(FinderContext)
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