import React from 'react'
import UserResult from '../component/users/UserResult'
import UserSearch from '../component/users/UserSearch'
import { useContext } from 'react'
import GitContext from '../context/GitContext'

const Home = () => {
  const {users, loading} = useContext(GitContext)

  return (
    <div>
      <UserSearch />
      <UserResult users={users} />
    </div>
  )
}

export default Home
