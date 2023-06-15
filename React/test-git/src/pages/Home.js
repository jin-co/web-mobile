import React from 'react'
import { UserSearch } from '../components/users/UserSearch'
import { UserResult } from '../components/users/UserResult'

export const Home = () => {
  return (
    <div>
      <UserSearch />
      <UserResult />
    </div>
  )
}
