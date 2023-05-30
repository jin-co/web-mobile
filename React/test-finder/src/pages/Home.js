import React from 'react'
import { UserSearch } from '../components/layout/users/UserSearch'
import { UserResult } from '../components/layout/users/UserResult'

export const Home = () => {
  return (
    <div>
      <UserSearch />
      <UserResult />
    </div>
  )
}
