import React from 'react'
import UserItem from './UserItem'
import { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/GithubContext'

const UserResults = () => {  
  const { users, loading, fetchUsers } = useContext(GithubContext)  

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

export default UserResults
